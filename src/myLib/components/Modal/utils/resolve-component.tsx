import { JSX } from "react"
import DetailsProperty from "@/src/features/property/admin/subfeatures/DetailsProperty/DetailsProperty";
import ImageManagerOrquest from "@/src/features/property/admin/subfeatures/ManagerImages/ImageManagerOrquest";
import { CreateProperty, EditProperty } from "@/src/features/property/admin/subfeatures";

interface FormsByAction {
  [action: string]: {
    [entity: string]: (props: any) => JSX.Element;
  };
}

export const formsByAction: FormsByAction = {
  create: {
    property: () => <CreateProperty />,
  },
  edit: {
    property: (props) => (
      <EditProperty user={props.user} defaultValues={props.defaultValues} />
    ),
  },
  details: {
    property: (props) => <DetailsProperty data={props.defaultValues} />,
  },
  "custom-images": {
    property: (props) => (
      <ImageManagerOrquest defaultValues={props.defaultValues} />
    ),
  },
};
