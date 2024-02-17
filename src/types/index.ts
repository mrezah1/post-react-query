export interface SectionCardProps {
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
  order?: number | string;
}

export enum CardEnum {
  list = "list",
  post = "post",
  create = "create",
}

export type CardStateType = Record<
  CardEnum.list | CardEnum.post | CardEnum.create,
  number
>;

export interface PostType {
  _id: string;
  title: string;
  body: string;
  author: string;
}
