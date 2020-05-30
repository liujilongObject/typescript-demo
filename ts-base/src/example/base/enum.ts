// 数字枚举 (反向映射)
enum Role {
  Reporter = 1,
  Developer,
  Owner,
  Guest
}
console.log(Role, Role.Reporter, 'enum Role')
let r: Role.Reporter = 3
console.log(r, 'r')

// 字符串枚举
enum Message {
  Success = '成功',
  Fail = '失败'
}
console.log(Message, 'enum Message')

// 枚举成员
enum Member {
  // 常量
  a,
  b = Member.a,
  c = 1 + 2,
  // 需要计算（编译时保留，运行时计算）
  d = Math.random(),
  e = 'abcd'.length
}

// 常量枚举 (减少编译时多余代码)
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
