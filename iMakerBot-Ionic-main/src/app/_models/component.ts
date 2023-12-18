export enum ComponentType {

  menue,
  carrousole,
  image,
  text,
  quickreply,
  userinput
}
export class ComponentModel {
  id: number;
  cdescription: string;
  componentType: ComponentType;
}
