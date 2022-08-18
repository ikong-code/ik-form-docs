import React from 'react';
import { Button } from 'antd';
import { XForm, useForm } from 'ik-form-react';
import 'antd/dist/antd.css';

const schema = [
  {
    key: 'firstName',
    type: 'XInput',
    required: true,
    ui: {
      label: 'First Name',
    },
    props: {
      placeholder: 'first name',
    },
  },
  {
    key: 'secondName',
    type: 'XInput',
    required: true,
    ui: {
      label: 'Second Name',
    },
    props: {
      placeholder: 'second name',
    },
  },
];

export default ({ title }: { title: string }) => {
  const formInstance = useForm({
    schema,
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
