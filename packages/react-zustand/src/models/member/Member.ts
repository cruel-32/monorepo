import { object, string, number, InferType } from 'yup';

export const createMemberSchema = object().shape({
  id: number().required(),
  name: string().min(2).required(),
  age: number().required(),
  job: string().required(),
});

export type Member = InferType<typeof createMemberSchema>; // InferType Schema로 부터 타입을 추론합니다.
