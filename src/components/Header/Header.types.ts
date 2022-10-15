import { MenuProps } from "antd";

export const items: MenuProps["items"] = [
  {
    label: "Finca Raíz",
    key: "realty",
    children: [
      { label: "Venta", key: "realty-sell" },
      { label: "Arrendamiento", key: "realty-lease", disabled: true },
      {
        label: "Propiedad Horizontal",
        key: "realty-horizontal",
        disabled: true,
      },
      { label: "Embargos", key: "realty-embargoes", disabled: true },
    ],
  },
  {
    label: "Jurídico",
    key: "legal",
    disabled: true,
    children: [
      { label: "Sucesiones", key: "legal-successions" },
      { label: "Hipotecas", key: "legal-mortgage" },
      { label: "Propiedad Horizontal", key: "realty-horizontal" },
      { label: "Embargos", key: "realty-embargoes" },
    ],
  },
];
