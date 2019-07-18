interface BaseEntityInterface {
  gmtCreateTime: (string)
  gmtUpdateTime: (string)
}

export interface UserInterface extends BaseEntityInterface{
  id: bigint
  username: string
  password: string
  phone: string
  header: string
  gender: string
}
