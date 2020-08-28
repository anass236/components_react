import React from "react";
import ChronicMed from "../icons/ChronicMed/ChronicMed";
import Parapharmacy from "../icons/Parapharmacy/Parapharmacy";
import Pensement from "../icons/Pensement/Pensement";
import ConsultMed from "../icons/ConsultMed/ConsultMed";
import NoCategory from "../icons/NoCategory/NoCategory";
import Orthopedic from "../icons/orthopedic/Orthopedic";
import AcuteMed from "../icons/AcuteMed/AcuteMed";
import Homeopathy from "../icons/Homeopathy/Homeopathy";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";

const CategoryList = [
  {
    name: "No Catégorie",
    Icon: NoCategory,
  },
  {
    name: "Parapharmacie",
    Icon: Parapharmacy,
  },
  {
    name: "Orthopédie",
    Icon: Orthopedic,
  },
  {
    name: "Medicament conseil",
    Icon: ConsultMed,
  },
  {
    name: "Medicament chronique",
    Icon: ChronicMed,
  },
  {
    name: "Homeopathie",
    Icon: Homeopathy,
  },
  {
    name: "Pansement",
    Icon: Pensement,
  },
  {
    name: "Medicament Aigüe",
    Icon: AcuteMed,
  },
];
const IconCategory = (props) => {
  const { name } = props;
  return (
    <>
      {CategoryList.filter((item) => item.name === name).map((item) => (
        <Tooltip title={item.name} placement="top" arrow>
          <IconButton style={{ padding: 0 }}>
            <item.Icon />
          </IconButton>
        </Tooltip>
      ))}
    </>
  );
};

export default IconCategory;
