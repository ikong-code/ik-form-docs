import React from 'react';
import { Button } from 'antd';
import { XForm, useForm } from 'ik-form-react';
import 'antd/dist/antd.css';

interface Field {
  visible: boolean;
  value: any;
  rule: any;
}

const schema = [
  {
    key: 'aa',
    type: 'XSelect',
    required: true,
    defaultValue: true,
    ui: {
      label: 'aa',
    },
    props: {
      options: [
        { label: 'bb visible', value: true },
        { label: 'bb hidden', value: false },
      ],
      placeholder: 'first name',
    },
  },
  {
    key: 'bb',
    type: 'XInput',
    required: true,
    ui: {
      label: 'bb',
    },
    props: {
      placeholder: 'bb name',
    },
  },
  {
    key: 'cc',
    type: 'XInput',
    required: true,
    ui: {
      label: 'cc',
    },
    props: {
      placeholder: 'cc name',
    },
  },
];

export default () => {
  const watchEffects = {
    'aa.value': (field: Field) => {
      formInstance.setFieldState('bb', { visible: field.value });
    },
    'bb.visible': (field: any) => {
      formInstance.setFieldValue('cc', 'hello world ' + new Date().getTime());
    },
  };

  const formInstance = useForm({
    schema,
    watch: watchEffects,
  });

  const handleClick = () => {
    formInstance.submit((res: any) => {
      console.log(res);
      alert(JSON.stringify(res));
    });
  };

  return (
    <XForm form={formInstance}>
      <Button onClick={formInstance.resetFields}>重置</Button>
      <Button onClick={handleClick}>提交</Button>
    </XForm>
  );
};
