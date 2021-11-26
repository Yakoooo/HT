export const rules = {
  name: [
    {
      required: true,
      message: '必须输入账号',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '必须是0-9或者a-z的十位数组合',
      trigger: 'blur'
    }
  ],
  pwd: [
    {
      required: true,
      message: '必须输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '必须是0-9或者a-z的十位数组合',
      trigger: 'blur'
    }
  ]
}

export const rules2 = {
  phono: [
    {
      required: true,
      message: '必须输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机格式不对',
      trigger: 'blur'
    }
  ],
  cmd: [
    {
      required: true,
      message: '必须输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{4}$/,
      message: '验证码不对',
      trigger: 'blur'
    }
  ]
}
