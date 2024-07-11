import React from "react";
import { ComponentProps } from "react";
import clsx from "clsx";

export const BrandMark = ({ className, ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 161 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx({
        "text-mint": true,
        [className || ""]: !!className,
      })}
      {...props}
    >
      <path d="M160 60L160 100" className="stroke-current text-mauve-12" />
      <path d="M160 80L136 80" className="stroke-current text-mauve-12" />
      <circle cx="112" cy="80" r="8" fill="currentColor" />
    </svg>
  );
};

export const BrandDetail = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={clsx({
        "absolute inset-0": true,
        [className || ""]: !!className,
      })}
      {...props}
    >
      <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="9" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="9" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="9" y="69" width="2" height="2" fill="#25D0AB" />
        <rect x="29" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="29" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="29" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="29" y="69" width="2" height="2" fill="#25D0AB" />
        <rect x="49" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="49" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="49" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="49" y="69" width="2" height="2" fill="#25D0AB" />
        <rect x="69" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="69" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="69" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="69" y="69" width="2" height="2" fill="#25D0AB" />
        <rect x="89" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="89" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="89" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="89" y="69" width="2" height="2" fill="#25D0AB" />
        <rect x="109" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="109" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="109" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="109" y="69" width="2" height="2" fill="#25D0AB" />
        <rect x="129" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="129" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="129" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="129" y="69" width="2" height="2" fill="#25D0AB" />
        <rect x="149" y="9" width="2" height="2" fill="#25D0AB" />
        <rect x="149" y="29" width="2" height="2" fill="#25D0AB" />
        <rect x="149" y="49" width="2" height="2" fill="#25D0AB" />
        <rect x="149" y="69" width="2" height="2" fill="#25D0AB" />
      </svg>
    </div>
  );
};

export const Ticket: React.FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      viewBox="0 0 1200 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="1199"
        height="159"
        fill="#EAEAFE"
        fillOpacity="0.11"
        stroke="#EDEDEF"
      />
      <path d="M1040 2V158.5" stroke="#EDEDEF" />
      <path d="M520 0V160.5" stroke="#EDEDEF" />
      <path d="M780 80V158.5" stroke="#EDEDEF" />
      <path d="M780 2V80.5" stroke="#EDEDEF" />
      <path d="M280 1V79.5" stroke="#EDEDEF" />
      <path d="M1040.5 80.25L2 80.25" stroke="#EDEDEF" />
      <path
        d="M1067.27 27.2727H1070.91V30.9091H1067.27V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 27.2727H1074.55V30.9091H1070.91V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 27.2727H1078.18V30.9091H1074.55V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 27.2727H1081.82V30.9091H1078.18V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 27.2727H1085.45V30.9091H1081.82V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1085.45 27.2727H1089.09V30.9091H1085.45V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 27.2727H1092.73V30.9091H1089.09V27.2727Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 27.2727H1100V30.9091H1096.36V27.2727Z" fill="#EDEDEF" />
      <path
        d="M1107.27 27.2727H1110.91V30.9091H1107.27V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 27.2727H1114.55V30.9091H1110.91V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 27.2727H1118.18V30.9091H1114.55V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 27.2727H1125.45V30.9091H1121.82V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 27.2727H1129.09V30.9091H1125.45V27.2727Z"
        fill="#EDEDEF"
      />
      <path d="M1140 27.2727H1143.64V30.9091H1140V27.2727Z" fill="#EDEDEF" />
      <path
        d="M1147.27 27.2727H1150.91V30.9091H1147.27V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 27.2727H1154.55V30.9091H1150.91V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 27.2727H1158.18V30.9091H1154.55V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 27.2727H1161.82V30.9091H1158.18V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 27.2727H1165.45V30.9091H1161.82V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 27.2727H1169.09V30.9091H1165.45V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 27.2727H1172.73V30.9091H1169.09V27.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 30.9091H1070.91V34.5454H1067.27V30.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 30.9091H1092.73V34.5454H1089.09V30.9091Z"
        fill="#EDEDEF"
      />
      <path d="M1100 30.9091H1103.64V34.5454H1100V30.9091Z" fill="#EDEDEF" />
      <path
        d="M1103.64 30.9091H1107.27V34.5454H1103.64V30.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1107.27 30.9091H1110.91V34.5454H1107.27V30.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 30.9091H1118.18V34.5454H1114.55V30.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 30.9091H1129.09V34.5454H1125.45V30.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 30.9091H1132.73V34.5454H1129.09V30.9091Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 30.9091H1140V34.5454H1136.36V30.9091Z" fill="#EDEDEF" />
      <path d="M1140 30.9091H1143.64V34.5454H1140V30.9091Z" fill="#EDEDEF" />
      <path
        d="M1147.27 30.9091H1150.91V34.5454H1147.27V30.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 30.9091H1172.73V34.5454H1169.09V30.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 34.5454H1070.91V38.1818H1067.27V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 34.5454H1078.18V38.1818H1074.55V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 34.5454H1081.82V38.1818H1078.18V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 34.5454H1085.45V38.1818H1081.82V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 34.5454H1092.73V38.1818H1089.09V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 34.5454H1114.55V38.1818H1110.91V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 34.5454H1121.82V38.1818H1118.18V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 34.5454H1125.45V38.1818H1121.82V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 34.5454H1129.09V38.1818H1125.45V34.5454Z"
        fill="#EDEDEF"
      />
      <path d="M1140 34.5454H1143.64V38.1818H1140V34.5454Z" fill="#EDEDEF" />
      <path
        d="M1147.27 34.5454H1150.91V38.1818H1147.27V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 34.5454H1158.18V38.1818H1154.55V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 34.5454H1161.82V38.1818H1158.18V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 34.5454H1165.45V38.1818H1161.82V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 34.5454H1172.73V38.1818H1169.09V34.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 38.1818H1070.91V41.8182H1067.27V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 38.1818H1078.18V41.8182H1074.55V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 38.1818H1081.82V41.8182H1078.18V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 38.1818H1085.45V41.8182H1081.82V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 38.1818H1092.73V41.8182H1089.09V38.1818Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 38.1818H1100V41.8182H1096.36V38.1818Z" fill="#EDEDEF" />
      <path
        d="M1103.64 38.1818H1107.27V41.8182H1103.64V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1107.27 38.1818H1110.91V41.8182H1107.27V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 38.1818H1121.82V41.8182H1118.18V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 38.1818H1125.45V41.8182H1121.82V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 38.1818H1136.36V41.8182H1132.73V38.1818Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 38.1818H1140V41.8182H1136.36V38.1818Z" fill="#EDEDEF" />
      <path
        d="M1147.27 38.1818H1150.91V41.8182H1147.27V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 38.1818H1158.18V41.8182H1154.55V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 38.1818H1161.82V41.8182H1158.18V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 38.1818H1165.45V41.8182H1161.82V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 38.1818H1172.73V41.8182H1169.09V38.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 41.8182H1070.91V45.4545H1067.27V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 41.8182H1078.18V45.4545H1074.55V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 41.8182H1081.82V45.4545H1078.18V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 41.8182H1085.45V45.4545H1081.82V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 41.8182H1092.73V45.4545H1089.09V41.8182Z"
        fill="#EDEDEF"
      />
      <path d="M1100 41.8182H1103.64V45.4545H1100V41.8182Z" fill="#EDEDEF" />
      <path
        d="M1103.64 41.8182H1107.27V45.4545H1103.64V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1107.27 41.8182H1110.91V45.4545H1107.27V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 41.8182H1114.55V45.4545H1110.91V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 41.8182H1125.45V45.4545H1121.82V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 41.8182H1129.09V45.4545H1125.45V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 41.8182H1132.73V45.4545H1129.09V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 41.8182H1136.36V45.4545H1132.73V41.8182Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 41.8182H1140V45.4545H1136.36V41.8182Z" fill="#EDEDEF" />
      <path
        d="M1147.27 41.8182H1150.91V45.4545H1147.27V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 41.8182H1158.18V45.4545H1154.55V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 41.8182H1161.82V45.4545H1158.18V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 41.8182H1165.45V45.4545H1161.82V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 41.8182H1172.73V45.4545H1169.09V41.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 45.4545H1070.91V49.0909H1067.27V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 45.4545H1092.73V49.0909H1089.09V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1103.64 45.4545H1107.27V49.0909H1103.64V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1107.27 45.4545H1110.91V49.0909H1107.27V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 45.4545H1114.55V49.0909H1110.91V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 45.4545H1118.18V49.0909H1114.55V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 45.4545H1136.36V49.0909H1132.73V45.4545Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 45.4545H1140V49.0909H1136.36V45.4545Z" fill="#EDEDEF" />
      <path
        d="M1147.27 45.4545H1150.91V49.0909H1147.27V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 45.4545H1172.73V49.0909H1169.09V45.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 49.0909H1070.91V52.7273H1067.27V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 49.0909H1074.55V52.7273H1070.91V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 49.0909H1078.18V52.7273H1074.55V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 49.0909H1081.82V52.7273H1078.18V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 49.0909H1085.45V52.7273H1081.82V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1085.45 49.0909H1089.09V52.7273H1085.45V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 49.0909H1092.73V52.7273H1089.09V49.0909Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 49.0909H1100V52.7273H1096.36V49.0909Z" fill="#EDEDEF" />
      <path
        d="M1103.64 49.0909H1107.27V52.7273H1103.64V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 49.0909H1114.55V52.7273H1110.91V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 49.0909H1121.82V52.7273H1118.18V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 49.0909H1129.09V52.7273H1125.45V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 49.0909H1136.36V52.7273H1132.73V49.0909Z"
        fill="#EDEDEF"
      />
      <path d="M1140 49.0909H1143.64V52.7273H1140V49.0909Z" fill="#EDEDEF" />
      <path
        d="M1147.27 49.0909H1150.91V52.7273H1147.27V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 49.0909H1154.55V52.7273H1150.91V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 49.0909H1158.18V52.7273H1154.55V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 49.0909H1161.82V52.7273H1158.18V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 49.0909H1165.45V52.7273H1161.82V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 49.0909H1169.09V52.7273H1165.45V49.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 49.0909H1172.73V52.7273H1169.09V49.0909Z"
        fill="#EDEDEF"
      />
      <path d="M1100 52.7273H1103.64V56.3636H1100V52.7273Z" fill="#EDEDEF" />
      <path
        d="M1107.27 52.7273H1110.91V56.3636H1107.27V52.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 52.7273H1114.55V56.3636H1110.91V52.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 52.7273H1121.82V56.3636H1118.18V52.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 52.7273H1125.45V56.3636H1121.82V52.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 52.7273H1129.09V56.3636H1125.45V52.7273Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 52.7273H1140V56.3636H1136.36V52.7273Z" fill="#EDEDEF" />
      <path d="M1140 52.7273H1143.64V56.3636H1140V52.7273Z" fill="#EDEDEF" />
      <path d="M1074.55 56.3636H1078.18V60H1074.55V56.3636Z" fill="#EDEDEF" />
      <path d="M1081.82 56.3636H1085.45V60H1081.82V56.3636Z" fill="#EDEDEF" />
      <path d="M1085.45 56.3636H1089.09V60H1085.45V56.3636Z" fill="#EDEDEF" />
      <path d="M1089.09 56.3636H1092.73V60H1089.09V56.3636Z" fill="#EDEDEF" />
      <path d="M1096.36 56.3636H1100V60H1096.36V56.3636Z" fill="#EDEDEF" />
      <path d="M1107.27 56.3636H1110.91V60H1107.27V56.3636Z" fill="#EDEDEF" />
      <path d="M1114.55 56.3636H1118.18V60H1114.55V56.3636Z" fill="#EDEDEF" />
      <path d="M1140 56.3636H1143.64V60H1140V56.3636Z" fill="#EDEDEF" />
      <path d="M1143.64 56.3636H1147.27V60H1143.64V56.3636Z" fill="#EDEDEF" />
      <path d="M1158.18 56.3636H1161.82V60H1158.18V56.3636Z" fill="#EDEDEF" />
      <path d="M1169.09 56.3636H1172.73V60H1169.09V56.3636Z" fill="#EDEDEF" />
      <path d="M1067.27 60H1070.91V63.6363H1067.27V60Z" fill="#EDEDEF" />
      <path d="M1074.55 60H1078.18V63.6363H1074.55V60Z" fill="#EDEDEF" />
      <path d="M1085.45 60H1089.09V63.6363H1085.45V60Z" fill="#EDEDEF" />
      <path d="M1096.36 60H1100V63.6363H1096.36V60Z" fill="#EDEDEF" />
      <path d="M1100 60H1103.64V63.6363H1100V60Z" fill="#EDEDEF" />
      <path d="M1103.64 60H1107.27V63.6363H1103.64V60Z" fill="#EDEDEF" />
      <path d="M1107.27 60H1110.91V63.6363H1107.27V60Z" fill="#EDEDEF" />
      <path d="M1114.55 60H1118.18V63.6363H1114.55V60Z" fill="#EDEDEF" />
      <path d="M1118.18 60H1121.82V63.6363H1118.18V60Z" fill="#EDEDEF" />
      <path d="M1129.09 60H1132.73V63.6363H1129.09V60Z" fill="#EDEDEF" />
      <path d="M1136.36 60H1140V63.6363H1136.36V60Z" fill="#EDEDEF" />
      <path d="M1140 60H1143.64V63.6363H1140V60Z" fill="#EDEDEF" />
      <path d="M1143.64 60H1147.27V63.6363H1143.64V60Z" fill="#EDEDEF" />
      <path d="M1154.55 60H1158.18V63.6363H1154.55V60Z" fill="#EDEDEF" />
      <path d="M1169.09 60H1172.73V63.6363H1169.09V60Z" fill="#EDEDEF" />
      <path
        d="M1067.27 63.6363H1070.91V67.2727H1067.27V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1085.45 63.6363H1089.09V67.2727H1085.45V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 63.6363H1092.73V67.2727H1089.09V63.6363Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 63.6363H1100V67.2727H1096.36V63.6363Z" fill="#EDEDEF" />
      <path d="M1100 63.6363H1103.64V67.2727H1100V63.6363Z" fill="#EDEDEF" />
      <path
        d="M1107.27 63.6363H1110.91V67.2727H1107.27V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 63.6363H1121.82V67.2727H1118.18V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 63.6363H1132.73V67.2727H1129.09V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 63.6363H1136.36V67.2727H1132.73V63.6363Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 63.6363H1140V67.2727H1136.36V63.6363Z" fill="#EDEDEF" />
      <path d="M1140 63.6363H1143.64V67.2727H1140V63.6363Z" fill="#EDEDEF" />
      <path
        d="M1161.82 63.6363H1165.45V67.2727H1161.82V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 63.6363H1169.09V67.2727H1165.45V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 63.6363H1172.73V67.2727H1169.09V63.6363Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 67.2727H1074.55V70.9091H1070.91V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 67.2727H1078.18V70.9091H1074.55V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 67.2727H1081.82V70.9091H1078.18V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1092.73 67.2727H1096.36V70.9091H1092.73V67.2727Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 67.2727H1100V70.9091H1096.36V67.2727Z" fill="#EDEDEF" />
      <path
        d="M1110.91 67.2727H1114.55V70.9091H1110.91V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 67.2727H1118.18V70.9091H1114.55V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 67.2727H1125.45V70.9091H1121.82V67.2727Z"
        fill="#EDEDEF"
      />
      <path d="M1140 67.2727H1143.64V70.9091H1140V67.2727Z" fill="#EDEDEF" />
      <path
        d="M1143.64 67.2727H1147.27V70.9091H1143.64V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1147.27 67.2727H1150.91V70.9091H1147.27V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 67.2727H1158.18V70.9091H1154.55V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 67.2727H1169.09V70.9091H1165.45V67.2727Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 70.9091H1070.91V74.5454H1067.27V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 70.9091H1074.55V74.5454H1070.91V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 70.9091H1078.18V74.5454H1074.55V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1085.45 70.9091H1089.09V74.5454H1085.45V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 70.9091H1092.73V74.5454H1089.09V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1092.73 70.9091H1096.36V74.5454H1092.73V70.9091Z"
        fill="#EDEDEF"
      />
      <path d="M1100 70.9091H1103.64V74.5454H1100V70.9091Z" fill="#EDEDEF" />
      <path
        d="M1103.64 70.9091H1107.27V74.5454H1103.64V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 70.9091H1118.18V74.5454H1114.55V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 70.9091H1132.73V74.5454H1129.09V70.9091Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 70.9091H1140V74.5454H1136.36V70.9091Z" fill="#EDEDEF" />
      <path d="M1140 70.9091H1143.64V74.5454H1140V70.9091Z" fill="#EDEDEF" />
      <path
        d="M1147.27 70.9091H1150.91V74.5454H1147.27V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 70.9091H1154.55V74.5454H1150.91V70.9091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 74.5454H1070.91V78.1818H1067.27V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 74.5454H1074.55V78.1818H1070.91V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 74.5454H1078.18V78.1818H1074.55V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 74.5454H1081.82V78.1818H1078.18V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1092.73 74.5454H1096.36V78.1818H1092.73V74.5454Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 74.5454H1100V78.1818H1096.36V74.5454Z" fill="#EDEDEF" />
      <path
        d="M1107.27 74.5454H1110.91V78.1818H1107.27V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 74.5454H1121.82V78.1818H1118.18V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 74.5454H1125.45V78.1818H1121.82V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 74.5454H1132.73V78.1818H1129.09V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 74.5454H1136.36V78.1818H1132.73V74.5454Z"
        fill="#EDEDEF"
      />
      <path d="M1140 74.5454H1143.64V78.1818H1140V74.5454Z" fill="#EDEDEF" />
      <path
        d="M1143.64 74.5454H1147.27V78.1818H1143.64V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1147.27 74.5454H1150.91V78.1818H1147.27V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 74.5454H1154.55V78.1818H1150.91V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 74.5454H1169.09V78.1818H1165.45V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 74.5454H1172.73V78.1818H1169.09V74.5454Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 78.1818H1070.91V81.8182H1067.27V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 78.1818H1085.45V81.8182H1081.82V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1085.45 78.1818H1089.09V81.8182H1085.45V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 78.1818H1092.73V81.8182H1089.09V78.1818Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 78.1818H1100V81.8182H1096.36V78.1818Z" fill="#EDEDEF" />
      <path
        d="M1114.55 78.1818H1118.18V81.8182H1114.55V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 78.1818H1121.82V81.8182H1118.18V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 78.1818H1132.73V81.8182H1129.09V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 78.1818H1136.36V81.8182H1132.73V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1147.27 78.1818H1150.91V81.8182H1147.27V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 78.1818H1154.55V81.8182H1150.91V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 78.1818H1165.45V81.8182H1161.82V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 78.1818H1169.09V81.8182H1165.45V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 78.1818H1172.73V81.8182H1169.09V78.1818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 81.8182H1070.91V85.4545H1067.27V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 81.8182H1074.55V85.4545H1070.91V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 81.8182H1078.18V85.4545H1074.55V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 81.8182H1081.82V85.4545H1078.18V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 81.8182H1085.45V85.4545H1081.82V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 81.8182H1114.55V85.4545H1110.91V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 81.8182H1129.09V85.4545H1125.45V81.8182Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 81.8182H1140V85.4545H1136.36V81.8182Z" fill="#EDEDEF" />
      <path
        d="M1150.91 81.8182H1154.55V85.4545H1150.91V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 81.8182H1169.09V85.4545H1165.45V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 81.8182H1172.73V85.4545H1169.09V81.8182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 85.4545H1070.91V89.0909H1067.27V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 85.4545H1085.45V89.0909H1081.82V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 85.4545H1092.73V89.0909H1089.09V85.4545Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 85.4545H1100V89.0909H1096.36V85.4545Z" fill="#EDEDEF" />
      <path
        d="M1114.55 85.4545H1118.18V89.0909H1114.55V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 85.4545H1121.82V89.0909H1118.18V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1147.27 85.4545H1150.91V89.0909H1147.27V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 85.4545H1158.18V89.0909H1154.55V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 85.4545H1161.82V89.0909H1158.18V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 85.4545H1169.09V89.0909H1165.45V85.4545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 89.0909H1081.82V92.7273H1078.18V89.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 89.0909H1085.45V92.7273H1081.82V89.0909Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 89.0909H1100V92.7273H1096.36V89.0909Z" fill="#EDEDEF" />
      <path
        d="M1107.27 89.0909H1110.91V92.7273H1107.27V89.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 89.0909H1125.45V92.7273H1121.82V89.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 89.0909H1136.36V92.7273H1132.73V89.0909Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 89.0909H1140V92.7273H1136.36V89.0909Z" fill="#EDEDEF" />
      <path
        d="M1150.91 89.0909H1154.55V92.7273H1150.91V89.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 89.0909H1169.09V92.7273H1165.45V89.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 89.0909H1172.73V92.7273H1169.09V89.0909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 92.7273H1070.91V96.3636H1067.27V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 92.7273H1081.82V96.3636H1078.18V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 92.7273H1085.45V96.3636H1081.82V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 92.7273H1092.73V96.3636H1089.09V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1092.73 92.7273H1096.36V96.3636H1092.73V92.7273Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 92.7273H1100V96.3636H1096.36V92.7273Z" fill="#EDEDEF" />
      <path
        d="M1114.55 92.7273H1118.18V96.3636H1114.55V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 92.7273H1125.45V96.3636H1121.82V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 92.7273H1129.09V96.3636H1125.45V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 92.7273H1136.36V96.3636H1132.73V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1143.64 92.7273H1147.27V96.3636H1143.64V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 92.7273H1154.55V96.3636H1150.91V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 92.7273H1161.82V96.3636H1158.18V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 92.7273H1165.45V96.3636H1161.82V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 92.7273H1169.09V96.3636H1165.45V92.7273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 92.7273H1172.73V96.3636H1169.09V92.7273Z"
        fill="#EDEDEF"
      />
      <path d="M1070.91 96.3636H1074.55V100H1070.91V96.3636Z" fill="#EDEDEF" />
      <path d="M1078.18 96.3636H1081.82V100H1078.18V96.3636Z" fill="#EDEDEF" />
      <path d="M1081.82 96.3636H1085.45V100H1081.82V96.3636Z" fill="#EDEDEF" />
      <path d="M1085.45 96.3636H1089.09V100H1085.45V96.3636Z" fill="#EDEDEF" />
      <path d="M1096.36 96.3636H1100V100H1096.36V96.3636Z" fill="#EDEDEF" />
      <path d="M1103.64 96.3636H1107.27V100H1103.64V96.3636Z" fill="#EDEDEF" />
      <path d="M1107.27 96.3636H1110.91V100H1107.27V96.3636Z" fill="#EDEDEF" />
      <path d="M1110.91 96.3636H1114.55V100H1110.91V96.3636Z" fill="#EDEDEF" />
      <path d="M1114.55 96.3636H1118.18V100H1114.55V96.3636Z" fill="#EDEDEF" />
      <path d="M1121.82 96.3636H1125.45V100H1121.82V96.3636Z" fill="#EDEDEF" />
      <path d="M1136.36 96.3636H1140V100H1136.36V96.3636Z" fill="#EDEDEF" />
      <path d="M1147.27 96.3636H1150.91V100H1147.27V96.3636Z" fill="#EDEDEF" />
      <path d="M1154.55 96.3636H1158.18V100H1154.55V96.3636Z" fill="#EDEDEF" />
      <path d="M1067.27 100H1070.91V103.636H1067.27V100Z" fill="#EDEDEF" />
      <path d="M1074.55 100H1078.18V103.636H1074.55V100Z" fill="#EDEDEF" />
      <path d="M1081.82 100H1085.45V103.636H1081.82V100Z" fill="#EDEDEF" />
      <path d="M1085.45 100H1089.09V103.636H1085.45V100Z" fill="#EDEDEF" />
      <path d="M1089.09 100H1092.73V103.636H1089.09V100Z" fill="#EDEDEF" />
      <path d="M1100 100H1103.64V103.636H1100V100Z" fill="#EDEDEF" />
      <path d="M1103.64 100H1107.27V103.636H1103.64V100Z" fill="#EDEDEF" />
      <path d="M1107.27 100H1110.91V103.636H1107.27V100Z" fill="#EDEDEF" />
      <path d="M1118.18 100H1121.82V103.636H1118.18V100Z" fill="#EDEDEF" />
      <path d="M1121.82 100H1125.45V103.636H1121.82V100Z" fill="#EDEDEF" />
      <path d="M1129.09 100H1132.73V103.636H1129.09V100Z" fill="#EDEDEF" />
      <path d="M1132.73 100H1136.36V103.636H1132.73V100Z" fill="#EDEDEF" />
      <path d="M1140 100H1143.64V103.636H1140V100Z" fill="#EDEDEF" />
      <path d="M1143.64 100H1147.27V103.636H1143.64V100Z" fill="#EDEDEF" />
      <path d="M1147.27 100H1150.91V103.636H1147.27V100Z" fill="#EDEDEF" />
      <path d="M1150.91 100H1154.55V103.636H1150.91V100Z" fill="#EDEDEF" />
      <path d="M1154.55 100H1158.18V103.636H1154.55V100Z" fill="#EDEDEF" />
      <path d="M1158.18 100H1161.82V103.636H1158.18V100Z" fill="#EDEDEF" />
      <path d="M1169.09 100H1172.73V103.636H1169.09V100Z" fill="#EDEDEF" />
      <path d="M1096.36 103.636H1100V107.273H1096.36V103.636Z" fill="#EDEDEF" />
      <path
        d="M1103.64 103.636H1107.27V107.273H1103.64V103.636Z"
        fill="#EDEDEF"
      />
      <path
        d="M1107.27 103.636H1110.91V107.273H1107.27V103.636Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 103.636H1132.73V107.273H1129.09V103.636Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 103.636H1140V107.273H1136.36V103.636Z" fill="#EDEDEF" />
      <path d="M1140 103.636H1143.64V107.273H1140V103.636Z" fill="#EDEDEF" />
      <path
        d="M1154.55 103.636H1158.18V107.273H1154.55V103.636Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 103.636H1169.09V107.273H1165.45V103.636Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 103.636H1172.73V107.273H1169.09V103.636Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 107.273H1070.91V110.909H1067.27V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 107.273H1074.55V110.909H1070.91V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 107.273H1078.18V110.909H1074.55V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 107.273H1081.82V110.909H1078.18V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 107.273H1085.45V110.909H1081.82V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1085.45 107.273H1089.09V110.909H1085.45V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 107.273H1092.73V110.909H1089.09V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 107.273H1118.18V110.909H1114.55V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 107.273H1121.82V110.909H1118.18V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 107.273H1129.09V110.909H1125.45V107.273Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 107.273H1140V110.909H1136.36V107.273Z" fill="#EDEDEF" />
      <path d="M1140 107.273H1143.64V110.909H1140V107.273Z" fill="#EDEDEF" />
      <path
        d="M1147.27 107.273H1150.91V110.909H1147.27V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 107.273H1158.18V110.909H1154.55V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1161.82 107.273H1165.45V110.909H1161.82V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 107.273H1172.73V110.909H1169.09V107.273Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 110.909H1070.91V114.545H1067.27V110.909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 110.909H1092.73V114.545H1089.09V110.909Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 110.909H1100V114.545H1096.36V110.909Z" fill="#EDEDEF" />
      <path d="M1100 110.909H1103.64V114.545H1100V110.909Z" fill="#EDEDEF" />
      <path
        d="M1103.64 110.909H1107.27V114.545H1103.64V110.909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 110.909H1118.18V114.545H1114.55V110.909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 110.909H1121.82V114.545H1118.18V110.909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 110.909H1125.45V114.545H1121.82V110.909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1129.09 110.909H1132.73V114.545H1129.09V110.909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 110.909H1136.36V114.545H1132.73V110.909Z"
        fill="#EDEDEF"
      />
      <path d="M1140 110.909H1143.64V114.545H1140V110.909Z" fill="#EDEDEF" />
      <path
        d="M1154.55 110.909H1158.18V114.545H1154.55V110.909Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 114.545H1070.91V118.182H1067.27V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 114.545H1078.18V118.182H1074.55V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 114.545H1081.82V118.182H1078.18V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 114.545H1085.45V118.182H1081.82V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 114.545H1092.73V118.182H1089.09V114.545Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 114.545H1100V118.182H1096.36V114.545Z" fill="#EDEDEF" />
      <path
        d="M1107.27 114.545H1110.91V118.182H1107.27V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 114.545H1118.18V118.182H1114.55V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 114.545H1121.82V118.182H1118.18V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 114.545H1125.45V118.182H1121.82V114.545Z"
        fill="#EDEDEF"
      />
      <path d="M1140 114.545H1143.64V118.182H1140V114.545Z" fill="#EDEDEF" />
      <path
        d="M1143.64 114.545H1147.27V118.182H1143.64V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1147.27 114.545H1150.91V118.182H1147.27V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 114.545H1154.55V118.182H1150.91V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 114.545H1158.18V118.182H1154.55V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 114.545H1161.82V118.182H1158.18V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 114.545H1169.09V118.182H1165.45V114.545Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 118.182H1070.91V121.818H1067.27V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 118.182H1078.18V121.818H1074.55V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 118.182H1081.82V121.818H1078.18V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 118.182H1085.45V121.818H1081.82V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 118.182H1092.73V121.818H1089.09V118.182Z"
        fill="#EDEDEF"
      />
      <path d="M1100 118.182H1103.64V121.818H1100V118.182Z" fill="#EDEDEF" />
      <path
        d="M1107.27 118.182H1110.91V121.818H1107.27V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 118.182H1114.55V121.818H1110.91V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 118.182H1121.82V121.818H1118.18V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 118.182H1125.45V121.818H1121.82V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 118.182H1129.09V121.818H1125.45V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 118.182H1136.36V121.818H1132.73V118.182Z"
        fill="#EDEDEF"
      />
      <path d="M1140 118.182H1143.64V121.818H1140V118.182Z" fill="#EDEDEF" />
      <path
        d="M1143.64 118.182H1147.27V121.818H1143.64V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 118.182H1158.18V121.818H1154.55V118.182Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 121.818H1070.91V125.455H1067.27V121.818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 121.818H1078.18V125.455H1074.55V121.818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 121.818H1081.82V125.455H1078.18V121.818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 121.818H1085.45V125.455H1081.82V121.818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 121.818H1092.73V125.455H1089.09V121.818Z"
        fill="#EDEDEF"
      />
      <path d="M1096.36 121.818H1100V125.455H1096.36V121.818Z" fill="#EDEDEF" />
      <path
        d="M1129.09 121.818H1132.73V125.455H1129.09V121.818Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 121.818H1140V125.455H1136.36V121.818Z" fill="#EDEDEF" />
      <path
        d="M1150.91 121.818H1154.55V125.455H1150.91V121.818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1154.55 121.818H1158.18V125.455H1154.55V121.818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 121.818H1172.73V125.455H1169.09V121.818Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 125.455H1070.91V129.091H1067.27V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 125.455H1092.73V129.091H1089.09V125.455Z"
        fill="#EDEDEF"
      />
      <path d="M1100 125.455H1103.64V129.091H1100V125.455Z" fill="#EDEDEF" />
      <path
        d="M1107.27 125.455H1110.91V129.091H1107.27V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1110.91 125.455H1114.55V129.091H1110.91V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1114.55 125.455H1118.18V129.091H1114.55V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1118.18 125.455H1121.82V129.091H1118.18V125.455Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 125.455H1140V129.091H1136.36V125.455Z" fill="#EDEDEF" />
      <path
        d="M1147.27 125.455H1150.91V129.091H1147.27V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1150.91 125.455H1154.55V129.091H1150.91V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1158.18 125.455H1161.82V129.091H1158.18V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 125.455H1169.09V129.091H1165.45V125.455Z"
        fill="#EDEDEF"
      />
      <path
        d="M1067.27 129.091H1070.91V132.727H1067.27V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1070.91 129.091H1074.55V132.727H1070.91V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1074.55 129.091H1078.18V132.727H1074.55V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1078.18 129.091H1081.82V132.727H1078.18V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1081.82 129.091H1085.45V132.727H1081.82V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1085.45 129.091H1089.09V132.727H1085.45V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1089.09 129.091H1092.73V132.727H1089.09V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1103.64 129.091H1107.27V132.727H1103.64V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1107.27 129.091H1110.91V132.727H1107.27V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1121.82 129.091H1125.45V132.727H1121.82V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1125.45 129.091H1129.09V132.727H1125.45V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1132.73 129.091H1136.36V132.727H1132.73V129.091Z"
        fill="#EDEDEF"
      />
      <path d="M1136.36 129.091H1140V132.727H1136.36V129.091Z" fill="#EDEDEF" />
      <path
        d="M1154.55 129.091H1158.18V132.727H1154.55V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1165.45 129.091H1169.09V132.727H1165.45V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M1169.09 129.091H1172.73V132.727H1169.09V129.091Z"
        fill="#EDEDEF"
      />
      <path
        d="M40.996 32V23.06H43.924C44.828 23.06 45.616 23.244 46.288 23.612C46.96 23.98 47.48 24.5 47.848 25.172C48.216 25.836 48.4 26.62 48.4 27.524C48.4 28.42 48.216 29.204 47.848 29.876C47.48 30.548 46.96 31.072 46.288 31.448C45.616 31.816 44.828 32 43.924 32H40.996ZM42.172 30.92H43.936C44.6 30.92 45.172 30.78 45.652 30.5C46.14 30.22 46.516 29.828 46.78 29.324C47.044 28.812 47.176 28.212 47.176 27.524C47.176 26.828 47.04 26.228 46.768 25.724C46.504 25.22 46.128 24.832 45.64 24.56C45.16 24.28 44.592 24.14 43.936 24.14H42.172V30.92ZM50.1305 32V23.06H55.9505V24.14H51.3065V26.972H55.7105V28.052H51.3065V30.92H55.9505V32H50.1305ZM60.0119 32L56.7839 23.06H58.0439L60.7799 30.92H60.5279L63.2639 23.06H64.5239L61.3079 32H60.0119ZM65.8918 32V23.06H71.7118V24.14H67.0678V26.972H71.4718V28.052H67.0678V30.92H71.7118V32H65.8918ZM73.4091 32V23.06H74.5851V30.92H78.5091V32H73.4091ZM84.1086 32.144C83.4766 32.144 82.8846 32.032 82.3326 31.808C81.7806 31.576 81.2966 31.252 80.8806 30.836C80.4726 30.42 80.1526 29.932 79.9206 29.372C79.6886 28.804 79.5726 28.188 79.5726 27.524C79.5726 26.852 79.6886 26.236 79.9206 25.676C80.1526 25.116 80.4726 24.628 80.8806 24.212C81.2966 23.796 81.7766 23.476 82.3206 23.252C82.8726 23.028 83.4686 22.916 84.1086 22.916C84.7486 22.916 85.3406 23.032 85.8846 23.264C86.4366 23.488 86.9166 23.808 87.3246 24.224C87.7406 24.632 88.0646 25.116 88.2966 25.676C88.5366 26.236 88.6566 26.852 88.6566 27.524C88.6566 28.188 88.5366 28.804 88.2966 29.372C88.0646 29.932 87.7406 30.42 87.3246 30.836C86.9166 31.252 86.4366 31.576 85.8846 31.808C85.3406 32.032 84.7486 32.144 84.1086 32.144ZM84.1086 31.052C84.6046 31.052 85.0566 30.964 85.4646 30.788C85.8726 30.604 86.2246 30.352 86.5206 30.032C86.8246 29.704 87.0566 29.328 87.2166 28.904C87.3846 28.472 87.4686 28.012 87.4686 27.524C87.4686 27.036 87.3846 26.58 87.2166 26.156C87.0566 25.732 86.8246 25.36 86.5206 25.04C86.2246 24.712 85.8726 24.46 85.4646 24.284C85.0566 24.1 84.6046 24.008 84.1086 24.008C83.6206 24.008 83.1726 24.1 82.7646 24.284C82.3566 24.46 82.0006 24.712 81.6966 25.04C81.4006 25.36 81.1686 25.732 81.0006 26.156C80.8326 26.58 80.7486 27.036 80.7486 27.524C80.7486 28.012 80.8326 28.472 81.0006 28.904C81.1686 29.328 81.4006 29.704 81.6966 30.032C82.0006 30.352 82.3566 30.604 82.7646 30.788C83.1726 30.964 83.6206 31.052 84.1086 31.052ZM90.6118 32V23.06H93.7678C94.3598 23.06 94.8798 23.172 95.3278 23.396C95.7758 23.62 96.1238 23.94 96.3718 24.356C96.6278 24.772 96.7558 25.26 96.7558 25.82C96.7558 26.38 96.6278 26.868 96.3718 27.284C96.1238 27.692 95.7758 28.012 95.3278 28.244C94.8878 28.468 94.3678 28.58 93.7678 28.58H91.7878V32H90.6118ZM91.7878 27.5H93.8038C94.1638 27.5 94.4758 27.432 94.7398 27.296C95.0038 27.16 95.2078 26.964 95.3518 26.708C95.4958 26.452 95.5678 26.156 95.5678 25.82C95.5678 25.476 95.4958 25.18 95.3518 24.932C95.2078 24.676 95.0038 24.48 94.7398 24.344C94.4758 24.208 94.1638 24.14 93.8038 24.14H91.7878V27.5ZM98.5862 32V23.06H104.406V24.14H99.7622V26.972H104.166V28.052H99.7622V30.92H104.406V32H98.5862ZM106.103 32V23.06H109.259C109.851 23.06 110.371 23.172 110.819 23.396C111.267 23.62 111.615 23.94 111.863 24.356C112.119 24.772 112.247 25.26 112.247 25.82C112.247 26.452 112.087 26.988 111.767 27.428C111.447 27.868 111.015 28.184 110.471 28.376L112.547 32H111.179L108.995 28.124L109.775 28.58H107.279V32H106.103ZM107.279 27.5H109.295C109.647 27.5 109.955 27.432 110.219 27.296C110.483 27.16 110.687 26.964 110.831 26.708C110.983 26.452 111.059 26.156 111.059 25.82C111.059 25.476 110.983 25.18 110.831 24.932C110.687 24.676 110.483 24.48 110.219 24.344C109.955 24.208 109.647 24.14 109.295 24.14H107.279V27.5Z"
        fill="#A09FA6"
      />
      <path
        d="M40.22 55L45.66 40.1H47.38L52.82 55H51.14L49.86 51.36H43.2L41.9 55H40.22ZM43.72 49.86H49.3L46.28 41.3H46.76L43.72 49.86ZM59.0363 55.24C58.0363 55.24 57.1363 55 56.3363 54.52C55.5363 54.0267 54.9029 53.36 54.4363 52.52C53.9829 51.6667 53.7563 50.7067 53.7563 49.64C53.7563 48.56 53.9829 47.6 54.4363 46.76C54.9029 45.92 55.5296 45.26 56.3163 44.78C57.1163 44.2867 58.0229 44.04 59.0363 44.04C59.9563 44.04 60.7763 44.24 61.4963 44.64C62.2163 45.04 62.7829 45.58 63.1963 46.26L62.9563 46.68V39.86H64.4563V55H62.9563V52.6L63.1963 52.82C62.8229 53.5933 62.2629 54.1933 61.5163 54.62C60.7829 55.0333 59.9563 55.24 59.0363 55.24ZM59.1163 53.74C59.8363 53.74 60.4829 53.56 61.0563 53.2C61.6429 52.84 62.1029 52.3533 62.4363 51.74C62.7829 51.1133 62.9563 50.4133 62.9563 49.64C62.9563 48.8667 62.7829 48.1733 62.4363 47.56C62.1029 46.9333 61.6429 46.44 61.0563 46.08C60.4829 45.72 59.8363 45.54 59.1163 45.54C58.4096 45.54 57.7696 45.72 57.1963 46.08C56.6229 46.44 56.1696 46.9267 55.8363 47.54C55.5163 48.1533 55.3563 48.8533 55.3563 49.64C55.3563 50.4133 55.5163 51.1133 55.8363 51.74C56.1696 52.3533 56.6163 52.84 57.1763 53.2C57.7496 53.56 58.3963 53.74 59.1163 53.74ZM70.6361 55.24C69.9561 55.24 69.3494 55.1133 68.8161 54.86C68.2828 54.5933 67.8628 54.2333 67.5561 53.78C67.2494 53.3267 67.0961 52.8067 67.0961 52.22C67.0961 51.66 67.2161 51.1533 67.4561 50.7C67.6961 50.2333 68.0694 49.84 68.5761 49.52C69.0828 49.2 69.7294 48.9733 70.5161 48.84L74.7161 48.14V49.5L70.8761 50.14C70.1028 50.2733 69.5428 50.52 69.1961 50.88C68.8628 51.24 68.6961 51.6667 68.6961 52.16C68.6961 52.64 68.8828 53.0467 69.2561 53.38C69.6428 53.7133 70.1361 53.88 70.7361 53.88C71.4694 53.88 72.1094 53.7267 72.6561 53.42C73.2028 53.1 73.6294 52.6733 73.9361 52.14C74.2428 51.6067 74.3961 51.0133 74.3961 50.36V47.64C74.3961 47 74.1628 46.48 73.6961 46.08C73.2294 45.68 72.6228 45.48 71.8761 45.48C71.2228 45.48 70.6494 45.6467 70.1561 45.98C69.6628 46.3 69.2961 46.72 69.0561 47.24L67.6961 46.5C67.8961 46.0467 68.2094 45.6333 68.6361 45.26C69.0761 44.8867 69.5761 44.5933 70.1361 44.38C70.6961 44.1533 71.2761 44.04 71.8761 44.04C72.6628 44.04 73.3561 44.1933 73.9561 44.5C74.5694 44.8067 75.0428 45.2333 75.3761 45.78C75.7228 46.3133 75.8961 46.9333 75.8961 47.64V55H74.3961V52.86L74.6161 53.08C74.4294 53.48 74.1361 53.8467 73.7361 54.18C73.3494 54.5 72.8894 54.76 72.3561 54.96C71.8361 55.1467 71.2628 55.24 70.6361 55.24ZM78.9814 55V44.28H80.4814V46.32L80.2414 46.02C80.5347 45.3933 80.9681 44.9067 81.5414 44.56C82.1281 44.2133 82.7681 44.04 83.4614 44.04C84.2881 44.04 85.0347 44.2733 85.7014 44.74C86.3681 45.2067 86.8414 45.8133 87.1214 46.56L86.7014 46.58C86.9681 45.7533 87.4281 45.1267 88.0814 44.7C88.7481 44.26 89.4814 44.04 90.2814 44.04C91.0014 44.04 91.6614 44.2133 92.2614 44.56C92.8747 44.9067 93.3614 45.3867 93.7214 46C94.0947 46.6 94.2814 47.28 94.2814 48.04V55H92.7814V48.62C92.7814 47.9667 92.6614 47.4133 92.4214 46.96C92.1947 46.5067 91.8814 46.16 91.4814 45.92C91.0814 45.6667 90.6214 45.54 90.1014 45.54C89.5947 45.54 89.1347 45.6667 88.7214 45.92C88.3081 46.16 87.9814 46.5133 87.7414 46.98C87.5014 47.4333 87.3814 47.98 87.3814 48.62V55H85.8814V48.62C85.8814 47.9667 85.7614 47.4133 85.5214 46.96C85.2947 46.5067 84.9814 46.16 84.5814 45.92C84.1814 45.6667 83.7214 45.54 83.2014 45.54C82.6814 45.54 82.2147 45.6667 81.8014 45.92C81.4014 46.16 81.0814 46.5133 80.8414 46.98C80.6014 47.4333 80.4814 47.98 80.4814 48.62V55H78.9814ZM100.764 55V40.1H110.364V41.6H102.364V46.78H109.964V48.28H102.364V53.5H110.364V55H100.764ZM112.79 55V39.86H114.29V55H112.79ZM117.36 55V44.28H118.86V46.32L118.62 46.02C118.914 45.3933 119.347 44.9067 119.92 44.56C120.507 44.2133 121.147 44.04 121.84 44.04C122.667 44.04 123.414 44.2733 124.08 44.74C124.747 45.2067 125.22 45.8133 125.5 46.56L125.08 46.58C125.347 45.7533 125.807 45.1267 126.46 44.7C127.127 44.26 127.86 44.04 128.66 44.04C129.38 44.04 130.04 44.2133 130.64 44.56C131.254 44.9067 131.74 45.3867 132.1 46C132.474 46.6 132.66 47.28 132.66 48.04V55H131.16V48.62C131.16 47.9667 131.04 47.4133 130.8 46.96C130.574 46.5067 130.26 46.16 129.86 45.92C129.46 45.6667 129 45.54 128.48 45.54C127.974 45.54 127.514 45.6667 127.1 45.92C126.687 46.16 126.36 46.5133 126.12 46.98C125.88 47.4333 125.76 47.98 125.76 48.62V55H124.26V48.62C124.26 47.9667 124.14 47.4133 123.9 46.96C123.674 46.5067 123.36 46.16 122.96 45.92C122.56 45.6667 122.1 45.54 121.58 45.54C121.06 45.54 120.594 45.6667 120.18 45.92C119.78 46.16 119.46 46.5133 119.22 46.98C118.98 47.4333 118.86 47.98 118.86 48.62V55H117.36ZM140.544 55.24C139.531 55.24 138.611 55 137.784 54.52C136.958 54.0267 136.298 53.36 135.804 52.52C135.324 51.6667 135.084 50.7 135.084 49.62C135.084 48.5533 135.324 47.6 135.804 46.76C136.284 45.92 136.931 45.26 137.744 44.78C138.571 44.2867 139.504 44.04 140.544 44.04C141.584 44.04 142.511 44.28 143.324 44.76C144.151 45.24 144.798 45.9 145.264 46.74C145.744 47.58 145.984 48.54 145.984 49.62C145.984 50.7133 145.738 51.6867 145.244 52.54C144.751 53.38 144.091 54.04 143.264 54.52C142.451 55 141.544 55.24 140.544 55.24ZM140.544 53.74C141.264 53.74 141.911 53.56 142.484 53.2C143.071 52.84 143.531 52.3467 143.864 51.72C144.211 51.0933 144.384 50.3933 144.384 49.62C144.384 48.8467 144.211 48.1533 143.864 47.54C143.531 46.9267 143.071 46.44 142.484 46.08C141.911 45.72 141.264 45.54 140.544 45.54C139.824 45.54 139.171 45.72 138.584 46.08C138.011 46.44 137.551 46.9267 137.204 47.54C136.858 48.1533 136.684 48.8467 136.684 49.62C136.684 50.3933 136.858 51.0933 137.204 51.72C137.551 52.3467 138.011 52.84 138.584 53.2C139.171 53.56 139.824 53.74 140.544 53.74ZM148.63 55V44.28H150.13V46.04L149.93 45.78C150.183 45.2733 150.563 44.8733 151.07 44.58C151.59 44.2867 152.217 44.14 152.95 44.14H153.63V45.64H152.69C151.917 45.64 151.297 45.88 150.83 46.36C150.363 46.84 150.13 47.52 150.13 48.4V55H148.63ZM160.268 55.24C159.268 55.24 158.361 55 157.548 54.52C156.748 54.0267 156.114 53.3533 155.648 52.5C155.181 51.6467 154.948 50.68 154.948 49.6C154.948 48.52 155.174 47.5667 155.628 46.74C156.081 45.9 156.694 45.24 157.468 44.76C158.254 44.28 159.134 44.04 160.108 44.04C160.881 44.04 161.568 44.1867 162.168 44.48C162.781 44.76 163.301 45.1467 163.728 45.64C164.154 46.12 164.481 46.6667 164.708 47.28C164.934 47.88 165.048 48.5 165.048 49.14C165.048 49.2733 165.041 49.4267 165.028 49.6C165.014 49.76 164.994 49.9267 164.968 50.1H155.908V48.7H164.108L163.388 49.3C163.508 48.5667 163.421 47.9133 163.128 47.34C162.848 46.7533 162.441 46.2933 161.908 45.96C161.374 45.6133 160.774 45.44 160.108 45.44C159.441 45.44 158.821 45.6133 158.248 45.96C157.688 46.3067 157.248 46.7933 156.928 47.42C156.608 48.0333 156.481 48.7667 156.548 49.62C156.481 50.4733 156.614 51.22 156.948 51.86C157.294 52.4867 157.761 52.9733 158.348 53.32C158.948 53.6667 159.588 53.84 160.268 53.84C161.054 53.84 161.714 53.6533 162.248 53.28C162.781 52.9067 163.214 52.44 163.548 51.88L164.828 52.56C164.614 53.04 164.288 53.4867 163.848 53.9C163.408 54.3 162.881 54.6267 162.268 54.88C161.668 55.12 161.001 55.24 160.268 55.24Z"
        fill="#EDEDEF"
      />
      <path
        d="M325.124 32.144C324.492 32.144 323.908 32.032 323.372 31.808C322.836 31.576 322.372 31.252 321.98 30.836C321.588 30.42 321.28 29.932 321.056 29.372C320.84 28.812 320.732 28.2 320.732 27.536C320.732 26.864 320.84 26.248 321.056 25.688C321.272 25.128 321.576 24.64 321.968 24.224C322.36 23.808 322.824 23.488 323.36 23.264C323.896 23.032 324.48 22.916 325.112 22.916C325.728 22.916 326.28 23.024 326.768 23.24C327.264 23.456 327.68 23.736 328.016 24.08C328.36 24.424 328.604 24.792 328.748 25.184L327.692 25.7C327.484 25.18 327.16 24.768 326.72 24.464C326.28 24.16 325.744 24.008 325.112 24.008C324.488 24.008 323.932 24.156 323.444 24.452C322.964 24.748 322.588 25.16 322.316 25.688C322.044 26.216 321.908 26.832 321.908 27.536C321.908 28.232 322.044 28.844 322.316 29.372C322.596 29.9 322.976 30.312 323.456 30.608C323.944 30.904 324.5 31.052 325.124 31.052C325.668 31.052 326.16 30.936 326.6 30.704C327.04 30.472 327.388 30.152 327.644 29.744C327.9 29.336 328.028 28.864 328.028 28.328V27.776L328.568 28.28H325.112V27.26H329.216V28.052C329.216 28.676 329.108 29.24 328.892 29.744C328.676 30.248 328.38 30.68 328.004 31.04C327.628 31.392 327.192 31.664 326.696 31.856C326.2 32.048 325.676 32.144 325.124 32.144ZM331.045 32V23.06H336.865V24.14H332.221V26.972H336.625V28.052H332.221V30.92H336.865V32H331.045ZM338.562 32V23.06H339.546L344.682 30.284L344.238 30.332V23.06H345.426V32H344.442L339.33 24.728L339.738 24.68V32H338.562ZM347.661 32V23.06H350.817C351.409 23.06 351.929 23.172 352.377 23.396C352.825 23.62 353.173 23.94 353.421 24.356C353.677 24.772 353.805 25.26 353.805 25.82C353.805 26.452 353.645 26.988 353.325 27.428C353.005 27.868 352.573 28.184 352.029 28.376L354.105 32H352.737L350.553 28.124L351.333 28.58H348.837V32H347.661ZM348.837 27.5H350.853C351.205 27.5 351.513 27.432 351.777 27.296C352.041 27.16 352.245 26.964 352.389 26.708C352.541 26.452 352.617 26.156 352.617 25.82C352.617 25.476 352.541 25.18 352.389 24.932C352.245 24.676 352.041 24.48 351.777 24.344C351.513 24.208 351.205 24.14 350.853 24.14H348.837V27.5ZM355.683 32V23.06H361.503V24.14H356.859V26.972H361.263V28.052H356.859V30.92H361.503V32H355.683Z"
        fill="#A09FA6"
      />
      <path
        d="M326.78 55.24C325.833 55.24 324.973 55.06 324.2 54.7C323.427 54.34 322.773 53.86 322.24 53.26C321.707 52.6467 321.327 51.9733 321.1 51.24L322.54 50.7C322.887 51.7133 323.427 52.4867 324.16 53.02C324.893 53.54 325.767 53.8 326.78 53.8C327.42 53.8 327.98 53.7 328.46 53.5C328.953 53.2867 329.333 52.9933 329.6 52.62C329.867 52.2467 330 51.8133 330 51.32C330 50.5867 329.8 50.02 329.4 49.62C329 49.22 328.427 48.9133 327.68 48.7L325 47.9C323.947 47.5933 323.133 47.08 322.56 46.36C322 45.64 321.72 44.82 321.72 43.9C321.72 43.1133 321.913 42.42 322.3 41.82C322.687 41.2067 323.213 40.7267 323.88 40.38C324.56 40.0333 325.327 39.86 326.18 39.86C327.073 39.86 327.873 40.0267 328.58 40.36C329.3 40.68 329.907 41.1067 330.4 41.64C330.893 42.1733 331.247 42.7667 331.46 43.42L330.06 43.98C329.74 43.1 329.24 42.4333 328.56 41.98C327.893 41.5267 327.107 41.3 326.2 41.3C325.627 41.3 325.12 41.4 324.68 41.6C324.253 41.8 323.92 42.0867 323.68 42.46C323.44 42.8333 323.32 43.2733 323.32 43.78C323.32 44.3933 323.513 44.9467 323.9 45.44C324.287 45.92 324.88 46.28 325.68 46.52L328.04 47.22C329.213 47.5667 330.1 48.0667 330.7 48.72C331.3 49.3733 331.6 50.1933 331.6 51.18C331.6 51.98 331.393 52.6867 330.98 53.3C330.58 53.9 330.013 54.3733 329.28 54.72C328.56 55.0667 327.727 55.24 326.78 55.24ZM339.49 55.24C338.476 55.24 337.556 55 336.73 54.52C335.903 54.0267 335.243 53.36 334.75 52.52C334.27 51.6667 334.03 50.7 334.03 49.62C334.03 48.5533 334.27 47.6 334.75 46.76C335.23 45.92 335.876 45.26 336.69 44.78C337.516 44.2867 338.45 44.04 339.49 44.04C340.53 44.04 341.456 44.28 342.27 44.76C343.096 45.24 343.743 45.9 344.21 46.74C344.69 47.58 344.93 48.54 344.93 49.62C344.93 50.7133 344.683 51.6867 344.19 52.54C343.696 53.38 343.036 54.04 342.21 54.52C341.396 55 340.49 55.24 339.49 55.24ZM339.49 53.74C340.21 53.74 340.856 53.56 341.43 53.2C342.016 52.84 342.476 52.3467 342.81 51.72C343.156 51.0933 343.33 50.3933 343.33 49.62C343.33 48.8467 343.156 48.1533 342.81 47.54C342.476 46.9267 342.016 46.44 341.43 46.08C340.856 45.72 340.21 45.54 339.49 45.54C338.77 45.54 338.116 45.72 337.53 46.08C336.956 46.44 336.496 46.9267 336.15 47.54C335.803 48.1533 335.63 48.8467 335.63 49.62C335.63 50.3933 335.803 51.0933 336.15 51.72C336.496 52.3467 336.956 52.84 337.53 53.2C338.116 53.56 338.77 53.74 339.49 53.74ZM348.285 55V45.78H346.145V44.28H348.285V43.32C348.285 42.5733 348.451 41.9467 348.785 41.44C349.118 40.92 349.558 40.5267 350.105 40.26C350.651 39.9933 351.238 39.86 351.865 39.86C351.998 39.86 352.151 39.8733 352.325 39.9C352.498 39.9133 352.638 39.9333 352.745 39.96V41.32C352.651 41.2933 352.525 41.28 352.365 41.28C352.205 41.2667 352.091 41.26 352.025 41.26C351.385 41.26 350.851 41.4133 350.425 41.72C349.998 42.0267 349.785 42.56 349.785 43.32V44.28H352.405V45.78H349.785V55H348.285ZM359.331 55.12C358.371 55.12 357.631 54.84 357.111 54.28C356.591 53.72 356.331 52.92 356.331 51.88V45.78H354.351V44.28H354.851C355.305 44.28 355.665 44.1333 355.931 43.84C356.198 43.5333 356.331 43.1533 356.331 42.7V41.8H357.831V44.28H360.191V45.78H357.831V51.88C357.831 52.24 357.885 52.56 357.991 52.84C358.098 53.1067 358.278 53.32 358.531 53.48C358.798 53.64 359.151 53.72 359.591 53.72C359.698 53.72 359.825 53.7133 359.971 53.7C360.118 53.6867 360.245 53.6733 360.351 53.66V55C360.191 55.04 360.011 55.0667 359.811 55.08C359.611 55.1067 359.451 55.12 359.331 55.12ZM365.345 55L361.665 44.28H363.365L366.405 53.66H365.805L368.665 44.28H370.165L373.025 53.66H372.425L375.485 44.28H377.165L373.485 55H371.985L369.205 45.82H369.625L366.845 55H365.345ZM381.632 55.24C380.952 55.24 380.346 55.1133 379.812 54.86C379.279 54.5933 378.859 54.2333 378.552 53.78C378.246 53.3267 378.092 52.8067 378.092 52.22C378.092 51.66 378.212 51.1533 378.452 50.7C378.692 50.2333 379.066 49.84 379.572 49.52C380.079 49.2 380.726 48.9733 381.512 48.84L385.712 48.14V49.5L381.872 50.14C381.099 50.2733 380.539 50.52 380.192 50.88C379.859 51.24 379.692 51.6667 379.692 52.16C379.692 52.64 379.879 53.0467 380.252 53.38C380.639 53.7133 381.132 53.88 381.732 53.88C382.466 53.88 383.106 53.7267 383.652 53.42C384.199 53.1 384.626 52.6733 384.932 52.14C385.239 51.6067 385.392 51.0133 385.392 50.36V47.64C385.392 47 385.159 46.48 384.692 46.08C384.226 45.68 383.619 45.48 382.872 45.48C382.219 45.48 381.646 45.6467 381.152 45.98C380.659 46.3 380.292 46.72 380.052 47.24L378.692 46.5C378.892 46.0467 379.206 45.6333 379.632 45.26C380.072 44.8867 380.572 44.5933 381.132 44.38C381.692 44.1533 382.272 44.04 382.872 44.04C383.659 44.04 384.352 44.1933 384.952 44.5C385.566 44.8067 386.039 45.2333 386.372 45.78C386.719 46.3133 386.892 46.9333 386.892 47.64V55H385.392V52.86L385.612 53.08C385.426 53.48 385.132 53.8467 384.732 54.18C384.346 54.5 383.886 54.76 383.352 54.96C382.832 55.1467 382.259 55.24 381.632 55.24ZM389.978 55V44.28H391.478V46.04L391.278 45.78C391.531 45.2733 391.911 44.8733 392.418 44.58C392.938 44.2867 393.564 44.14 394.298 44.14H394.978V45.64H394.038C393.264 45.64 392.644 45.88 392.178 46.36C391.711 46.84 391.478 47.52 391.478 48.4V55H389.978ZM401.615 55.24C400.615 55.24 399.709 55 398.895 54.52C398.095 54.0267 397.462 53.3533 396.995 52.5C396.529 51.6467 396.295 50.68 396.295 49.6C396.295 48.52 396.522 47.5667 396.975 46.74C397.429 45.9 398.042 45.24 398.815 44.76C399.602 44.28 400.482 44.04 401.455 44.04C402.229 44.04 402.915 44.1867 403.515 44.48C404.129 44.76 404.649 45.1467 405.075 45.64C405.502 46.12 405.829 46.6667 406.055 47.28C406.282 47.88 406.395 48.5 406.395 49.14C406.395 49.2733 406.389 49.4267 406.375 49.6C406.362 49.76 406.342 49.9267 406.315 50.1H397.255V48.7H405.455L404.735 49.3C404.855 48.5667 404.769 47.9133 404.475 47.34C404.195 46.7533 403.789 46.2933 403.255 45.96C402.722 45.6133 402.122 45.44 401.455 45.44C400.789 45.44 400.169 45.6133 399.595 45.96C399.035 46.3067 398.595 46.7933 398.275 47.42C397.955 48.0333 397.829 48.7667 397.895 49.62C397.829 50.4733 397.962 51.22 398.295 51.86C398.642 52.4867 399.109 52.9733 399.695 53.32C400.295 53.6667 400.935 53.84 401.615 53.84C402.402 53.84 403.062 53.6533 403.595 53.28C404.129 52.9067 404.562 52.44 404.895 51.88L406.175 52.56C405.962 53.04 405.635 53.4867 405.195 53.9C404.755 54.3 404.229 54.6267 403.615 54.88C403.015 55.12 402.349 55.24 401.615 55.24Z"
        fill="#EDEDEF"
      />
      <path
        d="M44.068 112.144C43.5 112.144 42.98 112.04 42.508 111.832C42.036 111.616 41.636 111.324 41.308 110.956C40.98 110.588 40.744 110.176 40.6 109.72L41.62 109.3C41.836 109.876 42.156 110.32 42.58 110.632C43.012 110.936 43.516 111.088 44.092 111.088C44.444 111.088 44.752 111.032 45.016 110.92C45.28 110.808 45.484 110.652 45.628 110.452C45.78 110.244 45.856 110.004 45.856 109.732C45.856 109.356 45.748 109.06 45.532 108.844C45.324 108.62 45.016 108.452 44.608 108.34L42.964 107.836C42.316 107.636 41.82 107.32 41.476 106.888C41.132 106.456 40.96 105.96 40.96 105.4C40.96 104.912 41.076 104.484 41.308 104.116C41.548 103.74 41.876 103.448 42.292 103.24C42.716 103.024 43.196 102.916 43.732 102.916C44.268 102.916 44.752 103.012 45.184 103.204C45.624 103.396 45.996 103.656 46.3 103.984C46.604 104.304 46.828 104.672 46.972 105.088L45.964 105.508C45.772 105.004 45.484 104.624 45.1 104.368C44.716 104.104 44.264 103.972 43.744 103.972C43.424 103.972 43.14 104.028 42.892 104.14C42.652 104.244 42.464 104.4 42.328 104.608C42.2 104.808 42.136 105.048 42.136 105.328C42.136 105.656 42.24 105.948 42.448 106.204C42.656 106.46 42.972 106.656 43.396 106.792L44.896 107.236C45.6 107.452 46.132 107.76 46.492 108.16C46.852 108.56 47.032 109.056 47.032 109.648C47.032 110.136 46.904 110.568 46.648 110.944C46.4 111.32 46.052 111.616 45.604 111.832C45.164 112.04 44.652 112.144 44.068 112.144ZM53.1098 112.144C52.4778 112.144 51.8938 112.032 51.3578 111.808C50.8298 111.576 50.3658 111.252 49.9658 110.836C49.5738 110.42 49.2698 109.932 49.0538 109.372C48.8378 108.812 48.7298 108.2 48.7298 107.536C48.7298 106.864 48.8378 106.248 49.0538 105.688C49.2698 105.128 49.5738 104.64 49.9658 104.224C50.3578 103.808 50.8218 103.488 51.3578 103.264C51.8938 103.032 52.4778 102.916 53.1098 102.916C53.7258 102.916 54.2778 103.024 54.7658 103.24C55.2618 103.456 55.6778 103.736 56.0138 104.08C56.3578 104.424 56.6018 104.792 56.7458 105.184L55.6658 105.676C55.4578 105.18 55.1338 104.78 54.6938 104.476C54.2538 104.164 53.7258 104.008 53.1098 104.008C52.4858 104.008 51.9298 104.156 51.4418 104.452C50.9618 104.748 50.5858 105.16 50.3138 105.688C50.0418 106.216 49.9058 106.832 49.9058 107.536C49.9058 108.232 50.0418 108.844 50.3138 109.372C50.5858 109.9 50.9618 110.312 51.4418 110.608C51.9298 110.904 52.4858 111.052 53.1098 111.052C53.7258 111.052 54.2538 110.9 54.6938 110.596C55.1338 110.284 55.4578 109.88 55.6658 109.384L56.7458 109.876C56.6018 110.268 56.3578 110.636 56.0138 110.98C55.6778 111.324 55.2618 111.604 54.7658 111.82C54.2778 112.036 53.7258 112.144 53.1098 112.144ZM58.5854 112V103.06H61.7414C62.3334 103.06 62.8534 103.172 63.3014 103.396C63.7494 103.62 64.0974 103.94 64.3454 104.356C64.6014 104.772 64.7294 105.26 64.7294 105.82C64.7294 106.452 64.5694 106.988 64.2494 107.428C63.9294 107.868 63.4974 108.184 62.9534 108.376L65.0294 112H63.6614L61.4774 108.124L62.2574 108.58H59.7614V112H58.5854ZM59.7614 107.5H61.7774C62.1294 107.5 62.4374 107.432 62.7014 107.296C62.9654 107.16 63.1694 106.964 63.3134 106.708C63.4654 106.452 63.5414 106.156 63.5414 105.82C63.5414 105.476 63.4654 105.18 63.3134 104.932C63.1694 104.676 62.9654 104.48 62.7014 104.344C62.4374 104.208 62.1294 104.14 61.7774 104.14H59.7614V107.5ZM66.6066 112V103.06H72.4266V104.14H67.7826V106.972H72.1866V108.052H67.7826V110.92H72.4266V112H66.6066ZM74.124 112V103.06H79.944V104.14H75.3V106.972H79.704V108.052H75.3V110.92H79.944V112H74.124ZM81.6413 112V103.06H82.6253L87.7613 110.284L87.3173 110.332V103.06H88.5053V112H87.5213L82.4093 104.728L82.8173 104.68V112H81.6413ZM90.7407 112V103.06H91.9167V112H90.7407ZM94.1448 112V103.06H95.1288L100.265 110.284L99.8208 110.332V103.06H101.009V112H100.025L94.9128 104.728L95.3208 104.68V112H94.1448ZM107.372 112.144C106.74 112.144 106.156 112.032 105.62 111.808C105.084 111.576 104.62 111.252 104.228 110.836C103.836 110.42 103.528 109.932 103.304 109.372C103.088 108.812 102.98 108.2 102.98 107.536C102.98 106.864 103.088 106.248 103.304 105.688C103.52 105.128 103.824 104.64 104.216 104.224C104.608 103.808 105.072 103.488 105.608 103.264C106.144 103.032 106.728 102.916 107.36 102.916C107.976 102.916 108.528 103.024 109.016 103.24C109.512 103.456 109.928 103.736 110.264 104.08C110.608 104.424 110.852 104.792 110.996 105.184L109.94 105.7C109.732 105.18 109.408 104.768 108.968 104.464C108.528 104.16 107.992 104.008 107.36 104.008C106.736 104.008 106.18 104.156 105.692 104.452C105.212 104.748 104.836 105.16 104.564 105.688C104.292 106.216 104.156 106.832 104.156 107.536C104.156 108.232 104.292 108.844 104.564 109.372C104.844 109.9 105.224 110.312 105.704 110.608C106.192 110.904 106.748 111.052 107.372 111.052C107.916 111.052 108.408 110.936 108.848 110.704C109.288 110.472 109.636 110.152 109.892 109.744C110.148 109.336 110.276 108.864 110.276 108.328V107.776L110.816 108.28H107.36V107.26H111.464V108.052C111.464 108.676 111.356 109.24 111.14 109.744C110.924 110.248 110.628 110.68 110.252 111.04C109.876 111.392 109.44 111.664 108.944 111.856C108.448 112.048 107.924 112.144 107.372 112.144Z"
        fill="#A09FA6"
      />
      <path
        d="M44.34 140V126.6H40.22V125.1H50.02V126.6H45.94V140H44.34ZM51.7744 140V124.86H53.2744V131.36L52.9344 131.28C53.201 130.587 53.6344 130.04 54.2344 129.64C54.8477 129.24 55.5544 129.04 56.3544 129.04C57.1144 129.04 57.7944 129.213 58.3944 129.56C59.0077 129.907 59.4877 130.387 59.8344 131C60.1944 131.6 60.3744 132.28 60.3744 133.04V140H58.8744V133.62C58.8744 132.967 58.7544 132.413 58.5144 131.96C58.2744 131.507 57.941 131.16 57.5144 130.92C57.101 130.667 56.6277 130.54 56.0944 130.54C55.561 130.54 55.081 130.667 54.6544 130.92C54.2277 131.16 53.8877 131.513 53.6344 131.98C53.3944 132.433 53.2744 132.98 53.2744 133.62V140H51.7744ZM68.1192 140.24C67.1192 140.24 66.2126 140 65.3992 139.52C64.5992 139.027 63.9659 138.353 63.4992 137.5C63.0326 136.647 62.7992 135.68 62.7992 134.6C62.7992 133.52 63.0259 132.567 63.4792 131.74C63.9326 130.9 64.5459 130.24 65.3192 129.76C66.1059 129.28 66.9859 129.04 67.9592 129.04C68.7326 129.04 69.4192 129.187 70.0192 129.48C70.6326 129.76 71.1526 130.147 71.5792 130.64C72.0059 131.12 72.3326 131.667 72.5592 132.28C72.7859 132.88 72.8992 133.5 72.8992 134.14C72.8992 134.273 72.8926 134.427 72.8792 134.6C72.8659 134.76 72.8459 134.927 72.8192 135.1H63.7592V133.7H71.9592L71.2392 134.3C71.3592 133.567 71.2726 132.913 70.9792 132.34C70.6992 131.753 70.2926 131.293 69.7592 130.96C69.2259 130.613 68.6259 130.44 67.9592 130.44C67.2926 130.44 66.6726 130.613 66.0992 130.96C65.5392 131.307 65.0992 131.793 64.7792 132.42C64.4592 133.033 64.3326 133.767 64.3992 134.62C64.3326 135.473 64.4659 136.22 64.7992 136.86C65.1459 137.487 65.6126 137.973 66.1992 138.32C66.7992 138.667 67.4392 138.84 68.1192 138.84C68.9059 138.84 69.5659 138.653 70.0992 138.28C70.6326 137.907 71.0659 137.44 71.3992 136.88L72.6792 137.56C72.4659 138.04 72.1392 138.487 71.6992 138.9C71.2592 139.3 70.7326 139.627 70.1192 139.88C69.5192 140.12 68.8526 140.24 68.1192 140.24ZM86.1823 140.24C85.1423 140.24 84.169 140.053 83.2623 139.68C82.369 139.293 81.5823 138.76 80.9023 138.08C80.2223 137.387 79.689 136.573 79.3023 135.64C78.9157 134.693 78.7223 133.66 78.7223 132.54C78.7223 131.42 78.9157 130.393 79.3023 129.46C79.689 128.513 80.2223 127.7 80.9023 127.02C81.5823 126.327 82.369 125.793 83.2623 125.42C84.169 125.047 85.1423 124.86 86.1823 124.86C87.2223 124.86 88.189 125.053 89.0823 125.44C89.989 125.813 90.7823 126.347 91.4623 127.04C92.1423 127.72 92.6757 128.527 93.0623 129.46C93.449 130.393 93.6423 131.42 93.6423 132.54C93.6423 133.66 93.449 134.693 93.0623 135.64C92.6757 136.573 92.1423 137.387 91.4623 138.08C90.7823 138.76 89.989 139.293 89.0823 139.68C88.189 140.053 87.2223 140.24 86.1823 140.24ZM86.1823 138.74C87.049 138.74 87.8357 138.58 88.5423 138.26C89.2623 137.94 89.8823 137.493 90.4023 136.92C90.9223 136.347 91.3223 135.687 91.6023 134.94C91.8957 134.193 92.0423 133.393 92.0423 132.54C92.0423 131.7 91.8957 130.907 91.6023 130.16C91.3223 129.413 90.9223 128.753 90.4023 128.18C89.8823 127.607 89.2623 127.16 88.5423 126.84C87.8357 126.52 87.049 126.36 86.1823 126.36C85.3157 126.36 84.5223 126.52 83.8023 126.84C83.0957 127.16 82.4823 127.607 81.9623 128.18C81.4423 128.753 81.0357 129.413 80.7423 130.16C80.4623 130.907 80.3223 131.7 80.3223 132.54C80.3223 133.393 80.4623 134.193 80.7423 134.94C81.0357 135.687 81.4423 136.347 81.9623 136.92C82.4823 137.493 83.1023 137.94 83.8223 138.26C84.5423 138.58 85.329 138.74 86.1823 138.74ZM95.4009 140V138.7L101.861 130.2L102.141 130.78H95.7409V129.28H103.461V130.58L97.0209 139.08L96.7409 138.5H103.501V140H95.4009ZM108.585 140.24C107.905 140.24 107.299 140.113 106.765 139.86C106.232 139.593 105.812 139.233 105.505 138.78C105.199 138.327 105.045 137.807 105.045 137.22C105.045 136.66 105.165 136.153 105.405 135.7C105.645 135.233 106.019 134.84 106.525 134.52C107.032 134.2 107.679 133.973 108.465 133.84L112.665 133.14V134.5L108.825 135.14C108.052 135.273 107.492 135.52 107.145 135.88C106.812 136.24 106.645 136.667 106.645 137.16C106.645 137.64 106.832 138.047 107.205 138.38C107.592 138.713 108.085 138.88 108.685 138.88C109.419 138.88 110.059 138.727 110.605 138.42C111.152 138.1 111.579 137.673 111.885 137.14C112.192 136.607 112.345 136.013 112.345 135.36V132.64C112.345 132 112.112 131.48 111.645 131.08C111.179 130.68 110.572 130.48 109.825 130.48C109.172 130.48 108.599 130.647 108.105 130.98C107.612 131.3 107.245 131.72 107.005 132.24L105.645 131.5C105.845 131.047 106.159 130.633 106.585 130.26C107.025 129.887 107.525 129.593 108.085 129.38C108.645 129.153 109.225 129.04 109.825 129.04C110.612 129.04 111.305 129.193 111.905 129.5C112.519 129.807 112.992 130.233 113.325 130.78C113.672 131.313 113.845 131.933 113.845 132.64V140H112.345V137.86L112.565 138.08C112.379 138.48 112.085 138.847 111.685 139.18C111.299 139.5 110.839 139.76 110.305 139.96C109.785 140.147 109.212 140.24 108.585 140.24ZM116.931 140V129.28H118.431V131.04L118.231 130.78C118.484 130.273 118.864 129.873 119.371 129.58C119.891 129.287 120.517 129.14 121.251 129.14H121.931V130.64H120.991C120.217 130.64 119.597 130.88 119.131 131.36C118.664 131.84 118.431 132.52 118.431 133.4V140H116.931ZM123.688 140V124.86H125.188V135.46L124.548 135.36L130.568 129.28H132.508L128.308 133.58L132.888 140H131.088L126.788 134.06L127.748 134.14L124.688 137.3L125.188 136.06V140H123.688ZM138.365 140.24C137.339 140.24 136.439 139.98 135.665 139.46C134.892 138.94 134.332 138.233 133.985 137.34L135.245 136.74C135.552 137.393 135.979 137.913 136.525 138.3C137.085 138.687 137.699 138.88 138.365 138.88C139.005 138.88 139.545 138.727 139.985 138.42C140.425 138.1 140.645 137.687 140.645 137.18C140.645 136.807 140.539 136.513 140.325 136.3C140.112 136.073 139.865 135.9 139.585 135.78C139.305 135.66 139.059 135.573 138.845 135.52L137.305 135.08C136.319 134.8 135.605 134.407 135.165 133.9C134.725 133.393 134.505 132.807 134.505 132.14C134.505 131.513 134.665 130.967 134.985 130.5C135.305 130.033 135.739 129.673 136.285 129.42C136.832 129.167 137.439 129.04 138.105 129.04C139.012 129.04 139.832 129.28 140.565 129.76C141.312 130.227 141.839 130.88 142.145 131.72L140.865 132.32C140.599 131.72 140.212 131.253 139.705 130.92C139.212 130.573 138.659 130.4 138.045 130.4C137.445 130.4 136.965 130.553 136.605 130.86C136.245 131.167 136.065 131.553 136.065 132.02C136.065 132.38 136.159 132.667 136.345 132.88C136.532 133.093 136.745 133.253 136.985 133.36C137.239 133.467 137.459 133.547 137.645 133.6L139.425 134.12C140.292 134.373 140.965 134.767 141.445 135.3C141.939 135.833 142.185 136.46 142.185 137.18C142.185 137.767 142.019 138.293 141.685 138.76C141.365 139.227 140.919 139.593 140.345 139.86C139.772 140.113 139.112 140.24 138.365 140.24ZM144.881 142.6V141.9C145.281 141.793 145.575 141.587 145.761 141.28C145.948 140.973 146.041 140.547 146.041 140H145.281V137.8H146.881V139.48C146.881 140.347 146.715 141.04 146.381 141.56C146.048 142.093 145.548 142.44 144.881 142.6ZM159.07 140.24C158.017 140.24 157.09 140.02 156.29 139.58C155.49 139.14 154.87 138.54 154.43 137.78C153.99 137.007 153.77 136.127 153.77 135.14V125.1H155.37V135.14C155.37 135.86 155.524 136.493 155.83 137.04C156.15 137.573 156.584 137.993 157.13 138.3C157.69 138.593 158.337 138.74 159.07 138.74C159.804 138.74 160.444 138.593 160.99 138.3C161.55 137.993 161.984 137.573 162.29 137.04C162.61 136.493 162.77 135.86 162.77 135.14V125.1H164.37V135.14C164.37 136.127 164.15 137.007 163.71 137.78C163.27 138.54 162.65 139.14 161.85 139.58C161.064 140.02 160.137 140.24 159.07 140.24ZM172.854 140.24C171.908 140.24 171.048 140.06 170.274 139.7C169.501 139.34 168.848 138.86 168.314 138.26C167.781 137.647 167.401 136.973 167.174 136.24L168.614 135.7C168.961 136.713 169.501 137.487 170.234 138.02C170.968 138.54 171.841 138.8 172.854 138.8C173.494 138.8 174.054 138.7 174.534 138.5C175.028 138.287 175.408 137.993 175.674 137.62C175.941 137.247 176.074 136.813 176.074 136.32C176.074 135.587 175.874 135.02 175.474 134.62C175.074 134.22 174.501 133.913 173.754 133.7L171.074 132.9C170.021 132.593 169.208 132.08 168.634 131.36C168.074 130.64 167.794 129.82 167.794 128.9C167.794 128.113 167.988 127.42 168.374 126.82C168.761 126.207 169.288 125.727 169.954 125.38C170.634 125.033 171.401 124.86 172.254 124.86C173.148 124.86 173.948 125.027 174.654 125.36C175.374 125.68 175.981 126.107 176.474 126.64C176.968 127.173 177.321 127.767 177.534 128.42L176.134 128.98C175.814 128.1 175.314 127.433 174.634 126.98C173.968 126.527 173.181 126.3 172.274 126.3C171.701 126.3 171.194 126.4 170.754 126.6C170.328 126.8 169.994 127.087 169.754 127.46C169.514 127.833 169.394 128.273 169.394 128.78C169.394 129.393 169.588 129.947 169.974 130.44C170.361 130.92 170.954 131.28 171.754 131.52L174.114 132.22C175.288 132.567 176.174 133.067 176.774 133.72C177.374 134.373 177.674 135.193 177.674 136.18C177.674 136.98 177.468 137.687 177.054 138.3C176.654 138.9 176.088 139.373 175.354 139.72C174.634 140.067 173.801 140.24 172.854 140.24ZM179.224 140L184.664 125.1H186.384L191.824 140H190.144L188.864 136.36H182.204L180.904 140H179.224ZM182.724 134.86H188.304L185.284 126.3H185.764L182.724 134.86ZM205.904 140.288C204.976 140.288 204.12 140.128 203.336 139.808C202.552 139.488 201.864 139.032 201.272 138.44C200.696 137.848 200.256 137.144 199.952 136.328L201.488 135.608C201.856 136.536 202.432 137.272 203.216 137.816C204 138.344 204.896 138.608 205.904 138.608C206.704 138.608 207.416 138.456 208.04 138.152C208.664 137.832 209.152 137.376 209.504 136.784C209.856 136.192 210.032 135.472 210.032 134.624C210.032 133.776 209.848 133.056 209.48 132.464C209.128 131.872 208.64 131.424 208.016 131.12C207.392 130.816 206.68 130.664 205.88 130.664C205.672 130.664 205.44 130.672 205.184 130.688C204.944 130.704 204.744 130.728 204.584 130.76L204.2 129.92L209.024 123.8H200.792V122.12H211.184V123.8L206.672 129.488L206.432 129.176C207.504 129.208 208.456 129.464 209.288 129.944C210.12 130.408 210.768 131.04 211.232 131.84C211.712 132.64 211.952 133.568 211.952 134.624C211.952 135.68 211.696 136.64 211.184 137.504C210.672 138.352 209.96 139.032 209.048 139.544C208.136 140.04 207.088 140.288 205.904 140.288ZM215.369 140L223.433 123.8H214.505V122.12H225.425V123.8L217.385 140H215.369ZM228.015 140V137.36H229.935V140H228.015ZM241.218 140.288C239.81 140.288 238.57 139.904 237.498 139.136C236.442 138.352 235.618 137.272 235.026 135.896C234.434 134.504 234.138 132.888 234.138 131.048C234.138 129.208 234.434 127.6 235.026 126.224C235.618 124.832 236.442 123.752 237.498 122.984C238.554 122.216 239.786 121.832 241.194 121.832C242.602 121.832 243.834 122.216 244.89 122.984C245.946 123.752 246.77 124.832 247.362 126.224C247.954 127.6 248.25 129.208 248.25 131.048C248.25 132.888 247.954 134.504 247.362 135.896C246.786 137.288 245.97 138.368 244.914 139.136C243.858 139.904 242.626 140.288 241.218 140.288ZM241.218 138.488C242.242 138.488 243.138 138.176 243.906 137.552C244.674 136.928 245.274 136.064 245.706 134.96C246.138 133.84 246.354 132.536 246.354 131.048C246.354 129.56 246.138 128.264 245.706 127.16C245.274 126.04 244.674 125.176 243.906 124.568C243.138 123.944 242.234 123.632 241.194 123.632C240.17 123.632 239.274 123.944 238.506 124.568C237.738 125.176 237.138 126.04 236.706 127.16C236.274 128.264 236.058 129.56 236.058 131.048C236.058 132.52 236.274 133.816 236.706 134.936C237.138 136.056 237.738 136.928 238.506 137.552C239.29 138.176 240.194 138.488 241.218 138.488ZM260.188 140V135.776H251.092V134.216L260.188 122.12H261.868V134.216H264.052V135.776H261.868V140H260.188ZM252.556 134.912L252.34 134.216H260.188V123.776L260.788 123.944L252.556 134.912ZM272.161 140.288C271.233 140.288 270.377 140.128 269.593 139.808C268.809 139.488 268.121 139.032 267.529 138.44C266.953 137.848 266.513 137.144 266.209 136.328L267.745 135.608C268.113 136.536 268.689 137.272 269.473 137.816C270.257 138.344 271.153 138.608 272.161 138.608C272.961 138.608 273.673 138.456 274.297 138.152C274.921 137.832 275.409 137.376 275.761 136.784C276.113 136.192 276.289 135.472 276.289 134.624C276.289 133.776 276.105 133.056 275.737 132.464C275.385 131.872 274.897 131.424 274.273 131.12C273.649 130.816 272.937 130.664 272.137 130.664C271.929 130.664 271.697 130.672 271.441 130.688C271.201 130.704 271.001 130.728 270.841 130.76L270.457 129.92L275.281 123.8H267.049V122.12H277.441V123.8L272.929 129.488L272.689 129.176C273.761 129.208 274.713 129.464 275.545 129.944C276.377 130.408 277.025 131.04 277.489 131.84C277.969 132.64 278.209 133.568 278.209 134.624C278.209 135.68 277.953 136.64 277.441 137.504C276.929 138.352 276.217 139.032 275.305 139.544C274.393 140.04 273.345 140.288 272.161 140.288ZM289.93 140V135.776H280.834V134.216L289.93 122.12H291.61V134.216H293.794V135.776H291.61V140H289.93ZM282.298 134.912L282.082 134.216H289.93V123.776L290.53 123.944L282.298 134.912ZM300.632 129.44C299.912 129.44 299.256 129.28 298.664 128.96C298.088 128.624 297.632 128.168 297.296 127.592C296.96 127.016 296.792 126.368 296.792 125.648C296.792 124.928 296.96 124.28 297.296 123.704C297.632 123.128 298.088 122.672 298.664 122.336C299.256 122 299.912 121.832 300.632 121.832C301.368 121.832 302.024 122 302.6 122.336C303.176 122.672 303.632 123.128 303.968 123.704C304.304 124.28 304.472 124.928 304.472 125.648C304.472 126.368 304.304 127.016 303.968 127.592C303.632 128.168 303.176 128.624 302.6 128.96C302.024 129.28 301.368 129.44 300.632 129.44ZM300.608 127.952C301.248 127.952 301.8 127.744 302.264 127.328C302.728 126.896 302.96 126.336 302.96 125.648C302.96 124.944 302.728 124.384 302.264 123.968C301.8 123.536 301.248 123.32 300.608 123.32C299.968 123.32 299.424 123.536 298.976 123.968C298.528 124.384 298.304 124.944 298.304 125.648C298.304 126.336 298.528 126.896 298.976 127.328C299.424 127.744 299.968 127.952 300.608 127.952ZM312.616 140V122.12H314.296L324.784 137.168H324.136V122.12H326.056V140H324.376L313.888 124.856H314.536V140H312.616ZM330.096 143.12V142.28C330.576 142.152 330.928 141.904 331.152 141.536C331.376 141.168 331.488 140.656 331.488 140H330.576V137.36H332.496V139.376C332.496 140.416 332.296 141.248 331.896 141.872C331.496 142.512 330.896 142.928 330.096 143.12ZM342.203 140L348.419 131.864L348.779 131.648C348.539 132.032 348.259 132.336 347.939 132.56C347.619 132.784 347.267 132.944 346.883 133.04C346.499 133.136 346.075 133.184 345.611 133.184C344.571 133.184 343.635 132.944 342.803 132.464C341.971 131.968 341.307 131.296 340.811 130.448C340.331 129.584 340.091 128.6 340.091 127.496C340.091 126.408 340.339 125.44 340.835 124.592C341.347 123.744 342.035 123.072 342.899 122.576C343.779 122.08 344.763 121.832 345.851 121.832C346.971 121.832 347.963 122.088 348.827 122.6C349.691 123.096 350.371 123.792 350.867 124.688C351.363 125.568 351.611 126.584 351.611 127.736C351.611 128.376 351.531 129.008 351.371 129.632C351.227 130.256 351.003 130.872 350.699 131.48C350.395 132.088 350.011 132.696 349.547 133.304L344.507 140H342.203ZM345.851 131.456C346.603 131.456 347.267 131.288 347.843 130.952C348.419 130.6 348.867 130.128 349.187 129.536C349.523 128.928 349.691 128.248 349.691 127.496C349.691 126.728 349.523 126.048 349.187 125.456C348.851 124.848 348.395 124.376 347.819 124.04C347.243 123.688 346.587 123.512 345.851 123.512C345.115 123.512 344.459 123.688 343.883 124.04C343.307 124.376 342.851 124.848 342.515 125.456C342.179 126.048 342.011 126.728 342.011 127.496C342.011 128.248 342.171 128.928 342.491 129.536C342.827 130.128 343.283 130.6 343.859 130.952C344.451 131.288 345.115 131.456 345.851 131.456ZM360.099 140.288C359.171 140.288 358.315 140.128 357.531 139.808C356.747 139.488 356.059 139.032 355.467 138.44C354.891 137.848 354.451 137.144 354.147 136.328L355.683 135.608C356.051 136.536 356.627 137.272 357.411 137.816C358.195 138.344 359.091 138.608 360.099 138.608C360.899 138.608 361.611 138.456 362.235 138.152C362.859 137.832 363.347 137.376 363.699 136.784C364.051 136.192 364.227 135.472 364.227 134.624C364.227 133.776 364.043 133.056 363.675 132.464C363.323 131.872 362.835 131.424 362.211 131.12C361.587 130.816 360.875 130.664 360.075 130.664C359.867 130.664 359.635 130.672 359.379 130.688C359.139 130.704 358.939 130.728 358.779 130.76L358.395 129.92L363.219 123.8H354.987V122.12H365.379V123.8L360.867 129.488L360.627 129.176C361.699 129.208 362.651 129.464 363.483 129.944C364.315 130.408 364.963 131.04 365.427 131.84C365.907 132.64 366.147 133.568 366.147 134.624C366.147 135.68 365.891 136.64 365.379 137.504C364.867 138.352 364.155 139.032 363.243 139.544C362.331 140.04 361.283 140.288 360.099 140.288ZM370.14 140V137.36H372.06V140H370.14ZM375.927 140V138.8L380.919 133.304C381.895 132.232 382.687 131.344 383.295 130.64C383.919 129.936 384.383 129.296 384.687 128.72C384.991 128.144 385.143 127.52 385.143 126.848C385.143 125.776 384.831 124.952 384.207 124.376C383.583 123.8 382.751 123.512 381.711 123.512C380.639 123.512 379.735 123.816 378.999 124.424C378.279 125.032 377.791 125.88 377.535 126.968L375.783 126.584C375.991 125.608 376.367 124.768 376.911 124.064C377.455 123.36 378.135 122.816 378.951 122.432C379.767 122.032 380.679 121.832 381.687 121.832C382.759 121.832 383.695 122.048 384.495 122.48C385.295 122.912 385.919 123.504 386.367 124.256C386.831 125.008 387.063 125.872 387.063 126.848C387.063 127.52 386.919 128.168 386.631 128.792C386.359 129.416 385.943 130.088 385.383 130.808C384.823 131.528 384.103 132.368 383.223 133.328L378.687 138.32H387.543V140H375.927ZM392.406 140L398.622 131.864L398.982 131.648C398.742 132.032 398.462 132.336 398.142 132.56C397.822 132.784 397.47 132.944 397.086 133.04C396.702 133.136 396.278 133.184 395.814 133.184C394.774 133.184 393.838 132.944 393.006 132.464C392.174 131.968 391.51 131.296 391.014 130.448C390.534 129.584 390.294 128.6 390.294 127.496C390.294 126.408 390.542 125.44 391.038 124.592C391.55 123.744 392.238 123.072 393.102 122.576C393.982 122.08 394.966 121.832 396.054 121.832C397.174 121.832 398.166 122.088 399.03 122.6C399.894 123.096 400.574 123.792 401.07 124.688C401.566 125.568 401.814 126.584 401.814 127.736C401.814 128.376 401.734 129.008 401.574 129.632C401.43 130.256 401.206 130.872 400.902 131.48C400.598 132.088 400.214 132.696 399.75 133.304L394.71 140H392.406ZM396.054 131.456C396.806 131.456 397.47 131.288 398.046 130.952C398.622 130.6 399.07 130.128 399.39 129.536C399.726 128.928 399.894 128.248 399.894 127.496C399.894 126.728 399.726 126.048 399.39 125.456C399.054 124.848 398.598 124.376 398.022 124.04C397.446 123.688 396.79 123.512 396.054 123.512C395.318 123.512 394.662 123.688 394.086 124.04C393.51 124.376 393.054 124.848 392.718 125.456C392.382 126.048 392.214 126.728 392.214 127.496C392.214 128.248 392.374 128.928 392.694 129.536C393.03 130.128 393.486 130.6 394.062 130.952C394.654 131.288 395.318 131.456 396.054 131.456ZM412.72 140V135.776H403.624V134.216L412.72 122.12H414.4V134.216H416.584V135.776H414.4V140H412.72ZM405.088 134.912L404.872 134.216H412.72V123.776L413.32 123.944L405.088 134.912ZM427.837 140V135.776H418.741V134.216L427.837 122.12H429.517V134.216H431.701V135.776H429.517V140H427.837ZM420.205 134.912L419.989 134.216H427.837V123.776L428.437 123.944L420.205 134.912ZM438.538 129.44C437.818 129.44 437.162 129.28 436.57 128.96C435.994 128.624 435.538 128.168 435.202 127.592C434.866 127.016 434.698 126.368 434.698 125.648C434.698 124.928 434.866 124.28 435.202 123.704C435.538 123.128 435.994 122.672 436.57 122.336C437.162 122 437.818 121.832 438.538 121.832C439.274 121.832 439.93 122 440.506 122.336C441.082 122.672 441.538 123.128 441.874 123.704C442.21 124.28 442.378 124.928 442.378 125.648C442.378 126.368 442.21 127.016 441.874 127.592C441.538 128.168 441.082 128.624 440.506 128.96C439.93 129.28 439.274 129.44 438.538 129.44ZM438.514 127.952C439.154 127.952 439.706 127.744 440.17 127.328C440.634 126.896 440.866 126.336 440.866 125.648C440.866 124.944 440.634 124.384 440.17 123.968C439.706 123.536 439.154 123.32 438.514 123.32C437.874 123.32 437.33 123.536 436.882 123.968C436.434 124.384 436.21 124.944 436.21 125.648C436.21 126.336 436.434 126.896 436.882 127.328C437.33 127.744 437.874 127.952 438.514 127.952ZM453.81 140L448.674 122.12H450.618L455.058 138.128H454.65L459.21 122.12H461.25L465.786 138.128H465.354L469.818 122.12H471.762L466.626 140H464.586L460.002 123.92H460.434L455.85 140H453.81Z"
        fill="#EDEDEF"
      />
      <path
        d="M559.996 32V23.06H563.152C563.744 23.06 564.264 23.172 564.712 23.396C565.16 23.62 565.508 23.94 565.756 24.356C566.012 24.772 566.14 25.26 566.14 25.82C566.14 26.452 565.98 26.988 565.66 27.428C565.34 27.868 564.908 28.184 564.364 28.376L566.44 32H565.072L562.888 28.124L563.668 28.58H561.172V32H559.996ZM561.172 27.5H563.188C563.54 27.5 563.848 27.432 564.112 27.296C564.376 27.16 564.58 26.964 564.724 26.708C564.876 26.452 564.952 26.156 564.952 25.82C564.952 25.476 564.876 25.18 564.724 24.932C564.58 24.676 564.376 24.48 564.112 24.344C563.848 24.208 563.54 24.14 563.188 24.14H561.172V27.5ZM567.153 32L570.357 23.06H571.749L574.953 32H573.693L572.961 29.9H569.145L568.413 32H567.153ZM569.517 28.82H572.589L570.885 23.912H571.221L569.517 28.82ZM577.282 32V24.14H574.858V23.06H580.858V24.14H578.47V32H577.282ZM582.232 32V23.06H583.408V32H582.232ZM585.636 32V23.06H586.62L591.756 30.284L591.312 30.332V23.06H592.5V32H591.516L586.404 24.728L586.812 24.68V32H585.636ZM598.863 32.144C598.231 32.144 597.647 32.032 597.111 31.808C596.575 31.576 596.111 31.252 595.719 30.836C595.327 30.42 595.019 29.932 594.795 29.372C594.579 28.812 594.471 28.2 594.471 27.536C594.471 26.864 594.579 26.248 594.795 25.688C595.011 25.128 595.315 24.64 595.707 24.224C596.099 23.808 596.563 23.488 597.099 23.264C597.635 23.032 598.219 22.916 598.851 22.916C599.467 22.916 600.019 23.024 600.507 23.24C601.003 23.456 601.419 23.736 601.755 24.08C602.099 24.424 602.343 24.792 602.487 25.184L601.431 25.7C601.223 25.18 600.899 24.768 600.459 24.464C600.019 24.16 599.483 24.008 598.851 24.008C598.227 24.008 597.671 24.156 597.183 24.452C596.703 24.748 596.327 25.16 596.055 25.688C595.783 26.216 595.647 26.832 595.647 27.536C595.647 28.232 595.783 28.844 596.055 29.372C596.335 29.9 596.715 30.312 597.195 30.608C597.683 30.904 598.239 31.052 598.863 31.052C599.407 31.052 599.899 30.936 600.339 30.704C600.779 30.472 601.127 30.152 601.383 29.744C601.639 29.336 601.767 28.864 601.767 28.328V27.776L602.307 28.28H598.851V27.26H602.955V28.052C602.955 28.676 602.847 29.24 602.631 29.744C602.415 30.248 602.119 30.68 601.743 31.04C601.367 31.392 600.931 31.664 600.435 31.856C599.939 32.048 599.415 32.144 598.863 32.144Z"
        fill="#A09FA6"
      />
      <path
        d="M560.76 55V40.1H565.88C566.853 40.1 567.707 40.2933 568.44 40.68C569.173 41.0533 569.74 41.5867 570.14 42.28C570.553 42.96 570.76 43.7533 570.76 44.66C570.76 45.5667 570.553 46.36 570.14 47.04C569.74 47.72 569.173 48.2533 568.44 48.64C567.72 49.0133 566.867 49.2 565.88 49.2H562.36V55H560.76ZM562.36 47.7H565.96C566.6 47.7 567.16 47.58 567.64 47.34C568.12 47.0867 568.493 46.7333 568.76 46.28C569.027 45.8133 569.16 45.2667 569.16 44.64C569.16 44.0133 569.027 43.4733 568.76 43.02C568.493 42.5667 568.12 42.22 567.64 41.98C567.16 41.7267 566.6 41.6 565.96 41.6H562.36V47.7ZM580.412 55.24C579.358 55.24 578.392 55.0533 577.512 54.68C576.632 54.2933 575.865 53.76 575.212 53.08C574.572 52.3867 574.072 51.5733 573.712 50.64C573.352 49.7067 573.172 48.68 573.172 47.56C573.172 46.44 573.352 45.4133 573.712 44.48C574.072 43.5467 574.572 42.7333 575.212 42.04C575.865 41.3467 576.632 40.8133 577.512 40.44C578.392 40.0533 579.358 39.86 580.412 39.86C581.425 39.86 582.332 40.04 583.132 40.4C583.945 40.76 584.625 41.2267 585.172 41.8C585.732 42.36 586.132 42.9533 586.372 43.58L584.932 44.28C584.558 43.3733 583.985 42.66 583.212 42.14C582.438 41.62 581.505 41.36 580.412 41.36C579.318 41.36 578.345 41.62 577.492 42.14C576.638 42.66 575.972 43.3867 575.492 44.32C575.012 45.24 574.772 46.32 574.772 47.56C574.772 48.7867 575.012 49.8667 575.492 50.8C575.972 51.7333 576.638 52.46 577.492 52.98C578.345 53.4867 579.318 53.74 580.412 53.74C581.385 53.74 582.258 53.5267 583.032 53.1C583.818 52.6733 584.438 52.0933 584.892 51.36C585.345 50.6133 585.572 49.76 585.572 48.8V47.98L586.292 48.7H580.412V47.3H587.172V48.54C587.172 49.5133 586.998 50.4133 586.652 51.24C586.305 52.0533 585.825 52.76 585.212 53.36C584.598 53.96 583.878 54.4267 583.052 54.76C582.238 55.08 581.358 55.24 580.412 55.24ZM595.296 55V41.5H592.496V40.1H596.896V55H595.296ZM604.978 55.24C604.204 55.24 603.491 55.1067 602.838 54.84C602.184 54.5733 601.611 54.1933 601.118 53.7C600.638 53.2067 600.271 52.62 600.018 51.94L601.298 51.34C601.604 52.1133 602.084 52.7267 602.738 53.18C603.391 53.62 604.138 53.84 604.978 53.84C605.644 53.84 606.238 53.7133 606.758 53.46C607.278 53.1933 607.684 52.8133 607.978 52.32C608.271 51.8267 608.418 51.2267 608.418 50.52C608.418 49.8133 608.264 49.2133 607.958 48.72C607.664 48.2267 607.258 47.8533 606.738 47.6C606.218 47.3467 605.624 47.22 604.958 47.22C604.784 47.22 604.591 47.2267 604.378 47.24C604.178 47.2533 604.011 47.2733 603.878 47.3L603.558 46.6L607.578 41.5H600.718V40.1H609.378V41.5L605.618 46.24L605.418 45.98C606.311 46.0067 607.104 46.22 607.798 46.62C608.491 47.0067 609.031 47.5333 609.418 48.2C609.818 48.8667 610.018 49.64 610.018 50.52C610.018 51.4 609.804 52.2 609.378 52.92C608.951 53.6267 608.358 54.1933 607.598 54.62C606.838 55.0333 605.964 55.24 604.978 55.24Z"
        fill="#EDEDEF"
      />
      <path
        d="M559.996 112V103.06H562.924C563.828 103.06 564.616 103.244 565.288 103.612C565.96 103.98 566.48 104.5 566.848 105.172C567.216 105.836 567.4 106.62 567.4 107.524C567.4 108.42 567.216 109.204 566.848 109.876C566.48 110.548 565.96 111.072 565.288 111.448C564.616 111.816 563.828 112 562.924 112H559.996ZM561.172 110.92H562.936C563.6 110.92 564.172 110.78 564.652 110.5C565.14 110.22 565.516 109.828 565.78 109.324C566.044 108.812 566.176 108.212 566.176 107.524C566.176 106.828 566.04 106.228 565.768 105.724C565.504 105.22 565.128 104.832 564.64 104.56C564.16 104.28 563.592 104.14 562.936 104.14H561.172V110.92ZM572.371 112.144C571.723 112.144 571.147 112.008 570.643 111.736C570.147 111.464 569.759 111.092 569.479 110.62C569.207 110.14 569.071 109.596 569.071 108.988V103.06H570.259V108.964C570.259 109.372 570.347 109.736 570.523 110.056C570.707 110.368 570.955 110.612 571.267 110.788C571.587 110.964 571.955 111.052 572.371 111.052C572.787 111.052 573.151 110.964 573.463 110.788C573.783 110.612 574.031 110.368 574.207 110.056C574.391 109.736 574.483 109.372 574.483 108.964V103.06H575.671V108.988C575.671 109.596 575.531 110.14 575.251 110.62C574.979 111.092 574.595 111.464 574.099 111.736C573.603 112.008 573.027 112.144 572.371 112.144ZM577.843 112V103.06H580.999C581.591 103.06 582.111 103.172 582.559 103.396C583.007 103.62 583.355 103.94 583.603 104.356C583.859 104.772 583.987 105.26 583.987 105.82C583.987 106.452 583.827 106.988 583.507 107.428C583.187 107.868 582.755 108.184 582.211 108.376L584.287 112H582.919L580.735 108.124L581.515 108.58H579.019V112H577.843ZM579.019 107.5H581.035C581.387 107.5 581.695 107.432 581.959 107.296C582.223 107.16 582.427 106.964 582.571 106.708C582.723 106.452 582.799 106.156 582.799 105.82C582.799 105.476 582.723 105.18 582.571 104.932C582.427 104.676 582.223 104.48 581.959 104.344C581.695 104.208 581.387 104.14 581.035 104.14H579.019V107.5ZM585 112L588.204 103.06H589.596L592.8 112H591.54L590.808 109.9H586.992L586.26 112H585ZM587.364 108.82H590.436L588.732 103.912H589.068L587.364 108.82ZM595.129 112V104.14H592.705V103.06H598.705V104.14H596.317V112H595.129ZM600.079 112V103.06H601.255V112H600.079ZM607.755 112.144C607.123 112.144 606.531 112.032 605.979 111.808C605.427 111.576 604.943 111.252 604.527 110.836C604.119 110.42 603.799 109.932 603.567 109.372C603.335 108.804 603.219 108.188 603.219 107.524C603.219 106.852 603.335 106.236 603.567 105.676C603.799 105.116 604.119 104.628 604.527 104.212C604.943 103.796 605.423 103.476 605.967 103.252C606.519 103.028 607.115 102.916 607.755 102.916C608.395 102.916 608.987 103.032 609.531 103.264C610.083 103.488 610.563 103.808 610.971 104.224C611.387 104.632 611.711 105.116 611.943 105.676C612.183 106.236 612.303 106.852 612.303 107.524C612.303 108.188 612.183 108.804 611.943 109.372C611.711 109.932 611.387 110.42 610.971 110.836C610.563 111.252 610.083 111.576 609.531 111.808C608.987 112.032 608.395 112.144 607.755 112.144ZM607.755 111.052C608.251 111.052 608.703 110.964 609.111 110.788C609.519 110.604 609.871 110.352 610.167 110.032C610.471 109.704 610.703 109.328 610.863 108.904C611.031 108.472 611.115 108.012 611.115 107.524C611.115 107.036 611.031 106.58 610.863 106.156C610.703 105.732 610.471 105.36 610.167 105.04C609.871 104.712 609.519 104.46 609.111 104.284C608.703 104.1 608.251 104.008 607.755 104.008C607.267 104.008 606.819 104.1 606.411 104.284C606.003 104.46 605.647 104.712 605.343 105.04C605.047 105.36 604.815 105.732 604.647 106.156C604.479 106.58 604.395 107.036 604.395 107.524C604.395 108.012 604.479 108.472 604.647 108.904C604.815 109.328 605.047 109.704 605.343 110.032C605.647 110.352 606.003 110.604 606.411 110.788C606.819 110.964 607.267 111.052 607.755 111.052ZM614.258 112V103.06H615.242L620.378 110.284L619.934 110.332V103.06H621.122V112H620.138L615.026 104.728L615.434 104.68V112H614.258Z"
        fill="#A09FA6"
      />
      <path
        d="M564.88 135.24C564.107 135.24 563.393 135.107 562.74 134.84C562.087 134.573 561.513 134.193 561.02 133.7C560.54 133.207 560.173 132.62 559.92 131.94L561.2 131.34C561.507 132.113 561.987 132.727 562.64 133.18C563.293 133.62 564.04 133.84 564.88 133.84C565.547 133.84 566.14 133.713 566.66 133.46C567.18 133.193 567.587 132.813 567.88 132.32C568.173 131.827 568.32 131.227 568.32 130.52C568.32 129.813 568.167 129.213 567.86 128.72C567.567 128.227 567.16 127.853 566.64 127.6C566.12 127.347 565.527 127.22 564.86 127.22C564.687 127.22 564.493 127.227 564.28 127.24C564.08 127.253 563.913 127.273 563.78 127.3L563.46 126.6L567.48 121.5H560.62V120.1H569.28V121.5L565.52 126.24L565.32 125.98C566.213 126.007 567.007 126.22 567.7 126.62C568.393 127.007 568.933 127.533 569.32 128.2C569.72 128.867 569.92 129.64 569.92 130.52C569.92 131.4 569.707 132.2 569.28 132.92C568.853 133.627 568.26 134.193 567.5 134.62C566.74 135.033 565.867 135.24 564.88 135.24ZM572.728 135V119.86H574.228V126.36L573.888 126.28C574.154 125.587 574.588 125.04 575.188 124.64C575.801 124.24 576.508 124.04 577.308 124.04C578.068 124.04 578.748 124.213 579.348 124.56C579.961 124.907 580.441 125.387 580.788 126C581.148 126.6 581.328 127.28 581.328 128.04V135H579.828V128.62C579.828 127.967 579.708 127.413 579.468 126.96C579.228 126.507 578.894 126.16 578.468 125.92C578.054 125.667 577.581 125.54 577.048 125.54C576.514 125.54 576.034 125.667 575.608 125.92C575.181 126.16 574.841 126.513 574.588 126.98C574.348 127.433 574.228 127.98 574.228 128.62V135H572.728ZM584.192 135V124.28H585.692V126.04L585.492 125.78C585.746 125.273 586.126 124.873 586.632 124.58C587.152 124.287 587.779 124.14 588.512 124.14H589.192V125.64H588.252C587.479 125.64 586.859 125.88 586.392 126.36C585.926 126.84 585.692 127.52 585.692 128.4V135H584.192ZM598.849 135.24C598.075 135.24 597.355 135.107 596.689 134.84C596.035 134.573 595.462 134.193 594.969 133.7C594.475 133.207 594.102 132.62 593.849 131.94L595.069 131.34C595.375 132.113 595.875 132.727 596.569 133.18C597.275 133.62 598.035 133.84 598.849 133.84C599.502 133.84 600.082 133.687 600.589 133.38C601.109 133.073 601.515 132.66 601.809 132.14C602.102 131.607 602.249 131.013 602.249 130.36C602.249 129.68 602.095 129.08 601.789 128.56C601.495 128.04 601.095 127.633 600.589 127.34C600.082 127.033 599.509 126.88 598.869 126.88C598.215 126.88 597.609 127.033 597.049 127.34C596.502 127.633 596.102 127.993 595.849 128.42L594.589 128.18L595.709 120.1H603.249V121.5H596.289L596.909 120.96L596.009 127.32L595.389 127.04C595.855 126.467 596.402 126.06 597.029 125.82C597.655 125.567 598.295 125.44 598.949 125.44C599.909 125.44 600.755 125.667 601.489 126.12C602.222 126.56 602.795 127.153 603.209 127.9C603.635 128.633 603.849 129.453 603.849 130.36C603.849 131.28 603.629 132.113 603.189 132.86C602.762 133.593 602.169 134.173 601.409 134.6C600.662 135.027 599.809 135.24 598.849 135.24ZM612.473 135.24C611.299 135.24 610.266 134.92 609.373 134.28C608.493 133.627 607.806 132.727 607.313 131.58C606.819 130.42 606.573 129.073 606.573 127.54C606.573 126.007 606.819 124.667 607.313 123.52C607.806 122.36 608.493 121.46 609.373 120.82C610.253 120.18 611.279 119.86 612.453 119.86C613.626 119.86 614.653 120.18 615.533 120.82C616.413 121.46 617.099 122.36 617.593 123.52C618.086 124.667 618.333 126.007 618.333 127.54C618.333 129.073 618.086 130.42 617.593 131.58C617.113 132.74 616.433 133.64 615.553 134.28C614.673 134.92 613.646 135.24 612.473 135.24ZM612.473 133.74C613.326 133.74 614.073 133.48 614.713 132.96C615.353 132.44 615.853 131.72 616.213 130.8C616.573 129.867 616.753 128.78 616.753 127.54C616.753 126.3 616.573 125.22 616.213 124.3C615.853 123.367 615.353 122.647 614.713 122.14C614.073 121.62 613.319 121.36 612.453 121.36C611.599 121.36 610.853 121.62 610.213 122.14C609.573 122.647 609.073 123.367 608.713 124.3C608.353 125.22 608.173 126.3 608.173 127.54C608.173 128.767 608.353 129.847 608.713 130.78C609.073 131.713 609.573 132.44 610.213 132.96C610.866 133.48 611.619 133.74 612.473 133.74ZM621.321 135V124.28H622.821V126.32L622.581 126.02C622.875 125.393 623.308 124.907 623.881 124.56C624.468 124.213 625.108 124.04 625.801 124.04C626.628 124.04 627.375 124.273 628.041 124.74C628.708 125.207 629.181 125.813 629.461 126.56L629.041 126.58C629.308 125.753 629.768 125.127 630.421 124.7C631.088 124.26 631.821 124.04 632.621 124.04C633.341 124.04 634.001 124.213 634.601 124.56C635.215 124.907 635.701 125.387 636.061 126C636.435 126.6 636.621 127.28 636.621 128.04V135H635.121V128.62C635.121 127.967 635.001 127.413 634.761 126.96C634.535 126.507 634.221 126.16 633.821 125.92C633.421 125.667 632.961 125.54 632.441 125.54C631.935 125.54 631.475 125.667 631.061 125.92C630.648 126.16 630.321 126.513 630.081 126.98C629.841 127.433 629.721 127.98 629.721 128.62V135H628.221V128.62C628.221 127.967 628.101 127.413 627.861 126.96C627.635 126.507 627.321 126.16 626.921 125.92C626.521 125.667 626.061 125.54 625.541 125.54C625.021 125.54 624.555 125.667 624.141 125.92C623.741 126.16 623.421 126.513 623.181 126.98C622.941 127.433 622.821 127.98 622.821 128.62V135H621.321Z"
        fill="#EDEDEF"
      />
      <path
        d="M820.996 32V23.06H824.152C824.744 23.06 825.264 23.172 825.712 23.396C826.16 23.62 826.508 23.94 826.756 24.356C827.012 24.772 827.14 25.26 827.14 25.82C827.14 26.452 826.98 26.988 826.66 27.428C826.34 27.868 825.908 28.184 825.364 28.376L827.44 32H826.072L823.888 28.124L824.668 28.58H822.172V32H820.996ZM822.172 27.5H824.188C824.54 27.5 824.848 27.432 825.112 27.296C825.376 27.16 825.58 26.964 825.724 26.708C825.876 26.452 825.952 26.156 825.952 25.82C825.952 25.476 825.876 25.18 825.724 24.932C825.58 24.676 825.376 24.48 825.112 24.344C824.848 24.208 824.54 24.14 824.188 24.14H822.172V27.5ZM829.017 32V23.06H834.837V24.14H830.193V26.972H834.597V28.052H830.193V30.92H834.837V32H829.017ZM836.535 32V23.06H837.711V30.92H841.635V32H836.535ZM843.196 32V23.06H849.016V24.14H844.372V26.972H848.776V28.052H844.372V30.92H849.016V32H843.196ZM849.85 32L853.054 23.06H854.446L857.65 32H856.39L855.658 29.9H851.842L851.11 32H849.85ZM852.214 28.82H855.286L853.582 23.912H853.918L852.214 28.82ZM861.971 32.144C861.403 32.144 860.883 32.04 860.411 31.832C859.939 31.616 859.539 31.324 859.211 30.956C858.883 30.588 858.647 30.176 858.503 29.72L859.523 29.3C859.739 29.876 860.059 30.32 860.483 30.632C860.915 30.936 861.419 31.088 861.995 31.088C862.347 31.088 862.655 31.032 862.919 30.92C863.183 30.808 863.387 30.652 863.531 30.452C863.683 30.244 863.759 30.004 863.759 29.732C863.759 29.356 863.651 29.06 863.435 28.844C863.227 28.62 862.919 28.452 862.511 28.34L860.867 27.836C860.219 27.636 859.723 27.32 859.379 26.888C859.035 26.456 858.863 25.96 858.863 25.4C858.863 24.912 858.979 24.484 859.211 24.116C859.451 23.74 859.779 23.448 860.195 23.24C860.619 23.024 861.099 22.916 861.635 22.916C862.171 22.916 862.655 23.012 863.087 23.204C863.527 23.396 863.899 23.656 864.203 23.984C864.507 24.304 864.731 24.672 864.875 25.088L863.867 25.508C863.675 25.004 863.387 24.624 863.003 24.368C862.619 24.104 862.167 23.972 861.647 23.972C861.327 23.972 861.043 24.028 860.795 24.14C860.555 24.244 860.367 24.4 860.231 24.608C860.103 24.808 860.039 25.048 860.039 25.328C860.039 25.656 860.143 25.948 860.351 26.204C860.559 26.46 860.875 26.656 861.299 26.792L862.799 27.236C863.503 27.452 864.035 27.76 864.395 28.16C864.755 28.56 864.935 29.056 864.935 29.648C864.935 30.136 864.807 30.568 864.551 30.944C864.303 31.32 863.955 31.616 863.507 31.832C863.067 32.04 862.555 32.144 861.971 32.144ZM866.897 32V23.06H872.717V24.14H868.073V26.972H872.477V28.052H868.073V30.92H872.717V32H866.897ZM874.414 32V23.06H877.342C878.246 23.06 879.034 23.244 879.706 23.612C880.378 23.98 880.898 24.5 881.266 25.172C881.634 25.836 881.818 26.62 881.818 27.524C881.818 28.42 881.634 29.204 881.266 29.876C880.898 30.548 880.378 31.072 879.706 31.448C879.034 31.816 878.246 32 877.342 32H874.414ZM875.59 30.92H877.354C878.018 30.92 878.59 30.78 879.07 30.5C879.558 30.22 879.934 29.828 880.198 29.324C880.462 28.812 880.594 28.212 880.594 27.524C880.594 26.828 880.458 26.228 880.186 25.724C879.922 25.22 879.546 24.832 879.058 24.56C878.578 24.28 878.01 24.14 877.354 24.14H875.59V30.92Z"
        fill="#A09FA6"
      />
      <path
        d="M821.16 55V54L825.32 49.42C826.133 48.5267 826.793 47.7867 827.3 47.2C827.82 46.6133 828.207 46.08 828.46 45.6C828.713 45.12 828.84 44.6 828.84 44.04C828.84 43.1467 828.58 42.46 828.06 41.98C827.54 41.5 826.847 41.26 825.98 41.26C825.087 41.26 824.333 41.5133 823.72 42.02C823.12 42.5267 822.713 43.2333 822.5 44.14L821.04 43.82C821.213 43.0067 821.527 42.3067 821.98 41.72C822.433 41.1333 823 40.68 823.68 40.36C824.36 40.0267 825.12 39.86 825.96 39.86C826.853 39.86 827.633 40.04 828.3 40.4C828.967 40.76 829.487 41.2533 829.86 41.88C830.247 42.5067 830.44 43.2267 830.44 44.04C830.44 44.6 830.32 45.14 830.08 45.66C829.853 46.18 829.507 46.74 829.04 47.34C828.573 47.94 827.973 48.64 827.24 49.44L823.46 53.6H830.84V55H821.16ZM839.332 55.24C838.159 55.24 837.126 54.92 836.232 54.28C835.352 53.6267 834.666 52.7267 834.172 51.58C833.679 50.42 833.432 49.0733 833.432 47.54C833.432 46.0067 833.679 44.6667 834.172 43.52C834.666 42.36 835.352 41.46 836.232 40.82C837.112 40.18 838.139 39.86 839.312 39.86C840.486 39.86 841.512 40.18 842.392 40.82C843.272 41.46 843.959 42.36 844.452 43.52C844.946 44.6667 845.192 46.0067 845.192 47.54C845.192 49.0733 844.946 50.42 844.452 51.58C843.972 52.74 843.292 53.64 842.412 54.28C841.532 54.92 840.506 55.24 839.332 55.24ZM839.332 53.74C840.186 53.74 840.932 53.48 841.572 52.96C842.212 52.44 842.712 51.72 843.072 50.8C843.432 49.8667 843.612 48.78 843.612 47.54C843.612 46.3 843.432 45.22 843.072 44.3C842.712 43.3667 842.212 42.6467 841.572 42.14C840.932 41.62 840.179 41.36 839.312 41.36C838.459 41.36 837.712 41.62 837.072 42.14C836.432 42.6467 835.932 43.3667 835.572 44.3C835.212 45.22 835.032 46.3 835.032 47.54C835.032 48.7667 835.212 49.8467 835.572 50.78C835.932 51.7133 836.432 52.44 837.072 52.96C837.726 53.48 838.479 53.74 839.332 53.74ZM847.801 55V54L851.961 49.42C852.774 48.5267 853.434 47.7867 853.941 47.2C854.461 46.6133 854.847 46.08 855.101 45.6C855.354 45.12 855.481 44.6 855.481 44.04C855.481 43.1467 855.221 42.46 854.701 41.98C854.181 41.5 853.487 41.26 852.621 41.26C851.727 41.26 850.974 41.5133 850.361 42.02C849.761 42.5267 849.354 43.2333 849.141 44.14L847.681 43.82C847.854 43.0067 848.167 42.3067 848.621 41.72C849.074 41.1333 849.641 40.68 850.321 40.36C851.001 40.0267 851.761 39.86 852.601 39.86C853.494 39.86 854.274 40.04 854.941 40.4C855.607 40.76 856.127 41.2533 856.501 41.88C856.887 42.5067 857.081 43.2267 857.081 44.04C857.081 44.6 856.961 45.14 856.721 45.66C856.494 46.18 856.147 46.74 855.681 47.34C855.214 47.94 854.614 48.64 853.881 49.44L850.101 53.6H857.481V55H847.801ZM866.938 55V51.48H859.358V50.18L866.938 40.1H868.338V50.18H870.158V51.48H868.338V55H866.938ZM860.578 50.76L860.398 50.18H866.938V41.48L867.438 41.62L860.578 50.76Z"
        fill="#EDEDEF"
      />
      <path
        d="M820.132 112L823.336 103.06H824.728L827.932 112H826.672L825.94 109.9H822.124L821.392 112H820.132ZM822.496 108.82H825.568L823.864 103.912H824.2L822.496 108.82ZM829.298 112V103.06H832.227C833.131 103.06 833.919 103.244 834.591 103.612C835.263 103.98 835.783 104.5 836.151 105.172C836.519 105.836 836.703 106.62 836.703 107.524C836.703 108.42 836.519 109.204 836.151 109.876C835.783 110.548 835.263 111.072 834.591 111.448C833.919 111.816 833.131 112 832.227 112H829.298ZM830.474 110.92H832.238C832.902 110.92 833.474 110.78 833.954 110.5C834.442 110.22 834.818 109.828 835.082 109.324C835.347 108.812 835.479 108.212 835.479 107.524C835.479 106.828 835.343 106.228 835.07 105.724C834.806 105.22 834.431 104.832 833.943 104.56C833.463 104.28 832.895 104.14 832.238 104.14H830.474V110.92ZM838.433 112V103.06H839.513L842.861 107.824H842.309L845.633 103.06H846.713V112H845.525V104.548L845.945 104.68L842.621 109.36H842.525L839.237 104.68L839.609 104.548V112H838.433ZM848.939 112V103.06H850.115V112H848.939ZM853.903 112V104.14H851.479V103.06H857.479V104.14H855.091V112H853.903Z"
        fill="#A09FA6"
      />
      <path
        d="M828.78 135.24C827.74 135.24 826.767 135.053 825.86 134.68C824.967 134.293 824.18 133.76 823.5 133.08C822.82 132.387 822.287 131.573 821.9 130.64C821.513 129.693 821.32 128.66 821.32 127.54C821.32 126.42 821.513 125.393 821.9 124.46C822.287 123.513 822.82 122.7 823.5 122.02C824.18 121.327 824.967 120.793 825.86 120.42C826.767 120.047 827.74 119.86 828.78 119.86C829.82 119.86 830.787 120.053 831.68 120.44C832.587 120.813 833.38 121.347 834.06 122.04C834.74 122.72 835.273 123.527 835.66 124.46C836.047 125.393 836.24 126.42 836.24 127.54C836.24 128.66 836.047 129.693 835.66 130.64C835.273 131.573 834.74 132.387 834.06 133.08C833.38 133.76 832.587 134.293 831.68 134.68C830.787 135.053 829.82 135.24 828.78 135.24ZM828.78 133.74C829.647 133.74 830.433 133.58 831.14 133.26C831.86 132.94 832.48 132.493 833 131.92C833.52 131.347 833.92 130.687 834.2 129.94C834.493 129.193 834.64 128.393 834.64 127.54C834.64 126.7 834.493 125.907 834.2 125.16C833.92 124.413 833.52 123.753 833 123.18C832.48 122.607 831.86 122.16 831.14 121.84C830.433 121.52 829.647 121.36 828.78 121.36C827.913 121.36 827.12 121.52 826.4 121.84C825.693 122.16 825.08 122.607 824.56 123.18C824.04 123.753 823.633 124.413 823.34 125.16C823.06 125.907 822.92 126.7 822.92 127.54C822.92 128.393 823.06 129.193 823.34 129.94C823.633 130.687 824.04 131.347 824.56 131.92C825.08 132.493 825.7 132.94 826.42 133.26C827.14 133.58 827.927 133.74 828.78 133.74ZM839.099 135V124.28H840.599V126.36L840.259 126.28C840.525 125.587 840.959 125.04 841.559 124.64C842.172 124.24 842.879 124.04 843.679 124.04C844.439 124.04 845.119 124.213 845.719 124.56C846.332 124.907 846.812 125.387 847.159 126C847.519 126.6 847.699 127.28 847.699 128.04V135H846.199V128.62C846.199 127.967 846.079 127.413 845.839 126.96C845.612 126.507 845.285 126.16 844.859 125.92C844.445 125.667 843.965 125.54 843.419 125.54C842.872 125.54 842.385 125.667 841.959 125.92C841.532 126.16 841.199 126.513 840.959 126.98C840.719 127.433 840.599 127.98 840.599 128.62V135H839.099ZM855.443 135.24C854.443 135.24 853.537 135 852.723 134.52C851.923 134.027 851.29 133.353 850.823 132.5C850.357 131.647 850.123 130.68 850.123 129.6C850.123 128.52 850.35 127.567 850.803 126.74C851.257 125.9 851.87 125.24 852.643 124.76C853.43 124.28 854.31 124.04 855.283 124.04C856.057 124.04 856.743 124.187 857.343 124.48C857.957 124.76 858.477 125.147 858.903 125.64C859.33 126.12 859.657 126.667 859.883 127.28C860.11 127.88 860.223 128.5 860.223 129.14C860.223 129.273 860.217 129.427 860.203 129.6C860.19 129.76 860.17 129.927 860.143 130.1H851.083V128.7H859.283L858.563 129.3C858.683 128.567 858.597 127.913 858.303 127.34C858.023 126.753 857.617 126.293 857.083 125.96C856.55 125.613 855.95 125.44 855.283 125.44C854.617 125.44 853.997 125.613 853.423 125.96C852.863 126.307 852.423 126.793 852.103 127.42C851.783 128.033 851.657 128.767 851.723 129.62C851.657 130.473 851.79 131.22 852.123 131.86C852.47 132.487 852.937 132.973 853.523 133.32C854.123 133.667 854.763 133.84 855.443 133.84C856.23 133.84 856.89 133.653 857.423 133.28C857.957 132.907 858.39 132.44 858.723 131.88L860.003 132.56C859.79 133.04 859.463 133.487 859.023 133.9C858.583 134.3 858.057 134.627 857.443 134.88C856.843 135.12 856.177 135.24 855.443 135.24Z"
        fill="#EDEDEF"
      />
    </svg>
  );
};

export const TicketFooter: React.FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      viewBox="0 0 1920 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="1920" height="80" fill="#EBEBFE" fillOpacity="0.06" />
      <rect
        x="0.5"
        y="0.5"
        width="1919"
        height="79"
        stroke="#E1E1FE"
        strokeOpacity="0.15"
      />
      <path
        d="M65.162 31.5V21.07H68.578C69.6327 21.07 70.552 21.2847 71.336 21.714C72.12 22.1433 72.7267 22.75 73.156 23.534C73.5853 24.3087 73.8 25.2233 73.8 26.278C73.8 27.3233 73.5853 28.238 73.156 29.022C72.7267 29.806 72.12 30.4173 71.336 30.856C70.552 31.2853 69.6327 31.5 68.578 31.5H65.162ZM66.534 30.24H68.592C69.3667 30.24 70.034 30.0767 70.594 29.75C71.1633 29.4233 71.602 28.966 71.91 28.378C72.218 27.7807 72.372 27.0807 72.372 26.278C72.372 25.466 72.2133 24.766 71.896 24.178C71.588 23.59 71.1493 23.1373 70.58 22.82C70.02 22.4933 69.3573 22.33 68.592 22.33H66.534V30.24ZM75.819 31.5V21.07H82.609V22.33H77.191V25.634H82.329V26.894H77.191V30.24H82.609V31.5H75.819ZM87.3472 31.5L83.5812 21.07H85.0512L88.2432 30.24H87.9492L91.1412 21.07H92.6112L88.8592 31.5H87.3472ZM94.2071 31.5V21.07H100.997V22.33H95.5791V25.634H100.717V26.894H95.5791V30.24H100.997V31.5H94.2071ZM102.977 31.5V21.07H104.349V30.24H108.927V31.5H102.977ZM115.46 31.668C114.723 31.668 114.032 31.5373 113.388 31.276C112.744 31.0053 112.179 30.6273 111.694 30.142C111.218 29.6567 110.845 29.0873 110.574 28.434C110.303 27.7713 110.168 27.0527 110.168 26.278C110.168 25.494 110.303 24.7753 110.574 24.122C110.845 23.4687 111.218 22.8993 111.694 22.414C112.179 21.9287 112.739 21.5553 113.374 21.294C114.018 21.0327 114.713 20.902 115.46 20.902C116.207 20.902 116.897 21.0373 117.532 21.308C118.176 21.5693 118.736 21.9427 119.212 22.428C119.697 22.904 120.075 23.4687 120.346 24.122C120.626 24.7753 120.766 25.494 120.766 26.278C120.766 27.0527 120.626 27.7713 120.346 28.434C120.075 29.0873 119.697 29.6567 119.212 30.142C118.736 30.6273 118.176 31.0053 117.532 31.276C116.897 31.5373 116.207 31.668 115.46 31.668ZM115.46 30.394C116.039 30.394 116.566 30.2913 117.042 30.086C117.518 29.8713 117.929 29.5773 118.274 29.204C118.629 28.8213 118.899 28.3827 119.086 27.888C119.282 27.384 119.38 26.8473 119.38 26.278C119.38 25.7087 119.282 25.1767 119.086 24.682C118.899 24.1873 118.629 23.7533 118.274 23.38C117.929 22.9973 117.518 22.7033 117.042 22.498C116.566 22.2833 116.039 22.176 115.46 22.176C114.891 22.176 114.368 22.2833 113.892 22.498C113.416 22.7033 113.001 22.9973 112.646 23.38C112.301 23.7533 112.03 24.1873 111.834 24.682C111.638 25.1767 111.54 25.7087 111.54 26.278C111.54 26.8473 111.638 27.384 111.834 27.888C112.03 28.3827 112.301 28.8213 112.646 29.204C113.001 29.5773 113.416 29.8713 113.892 30.086C114.368 30.2913 114.891 30.394 115.46 30.394ZM123.047 31.5V21.07H126.729C127.42 21.07 128.026 21.2007 128.549 21.462C129.072 21.7233 129.478 22.0967 129.767 22.582C130.066 23.0673 130.215 23.6367 130.215 24.29C130.215 24.9433 130.066 25.5127 129.767 25.998C129.478 26.474 129.072 26.8473 128.549 27.118C128.036 27.3793 127.429 27.51 126.729 27.51H124.419V31.5H123.047ZM124.419 26.25H126.771C127.191 26.25 127.555 26.1707 127.863 26.012C128.171 25.8533 128.409 25.6247 128.577 25.326C128.745 25.0273 128.829 24.682 128.829 24.29C128.829 23.8887 128.745 23.5433 128.577 23.254C128.409 22.9553 128.171 22.7267 127.863 22.568C127.555 22.4093 127.191 22.33 126.771 22.33H124.419V26.25ZM132.351 31.5V21.07H139.141V22.33H133.723V25.634H138.861V26.894H133.723V30.24H139.141V31.5H132.351ZM141.121 31.5V21.07H144.803C145.493 21.07 146.1 21.2007 146.623 21.462C147.145 21.7233 147.551 22.0967 147.841 22.582C148.139 23.0673 148.289 23.6367 148.289 24.29C148.289 25.0273 148.102 25.6527 147.729 26.166C147.355 26.6793 146.851 27.048 146.217 27.272L148.639 31.5H147.043L144.495 26.978L145.405 27.51H142.493V31.5H141.121ZM142.493 26.25H144.845C145.255 26.25 145.615 26.1707 145.923 26.012C146.231 25.8533 146.469 25.6247 146.637 25.326C146.814 25.0273 146.903 24.682 146.903 24.29C146.903 23.8887 146.814 23.5433 146.637 23.254C146.469 22.9553 146.231 22.7267 145.923 22.568C145.615 22.4093 145.255 22.33 144.845 22.33H142.493V26.25Z"
        fill="#A09FA6"
      />
      <path
        d="M64.22 57.5L69.66 42.6H71.38L76.82 57.5H75.14L73.86 53.86H67.2L65.9 57.5H64.22ZM67.72 52.36H73.3L70.28 43.8H70.76L67.72 52.36ZM83.0363 57.74C82.0363 57.74 81.1363 57.5 80.3363 57.02C79.5363 56.5267 78.9029 55.86 78.4363 55.02C77.9829 54.1667 77.7563 53.2067 77.7563 52.14C77.7563 51.06 77.9829 50.1 78.4363 49.26C78.9029 48.42 79.5296 47.76 80.3163 47.28C81.1163 46.7867 82.0229 46.54 83.0363 46.54C83.9563 46.54 84.7763 46.74 85.4963 47.14C86.2163 47.54 86.7829 48.08 87.1963 48.76L86.9563 49.18V42.36H88.4563V57.5H86.9563V55.1L87.1963 55.32C86.8229 56.0933 86.2629 56.6933 85.5163 57.12C84.7829 57.5333 83.9563 57.74 83.0363 57.74ZM83.1163 56.24C83.8363 56.24 84.4829 56.06 85.0563 55.7C85.6429 55.34 86.1029 54.8533 86.4363 54.24C86.7829 53.6133 86.9563 52.9133 86.9563 52.14C86.9563 51.3667 86.7829 50.6733 86.4363 50.06C86.1029 49.4333 85.6429 48.94 85.0563 48.58C84.4829 48.22 83.8363 48.04 83.1163 48.04C82.4096 48.04 81.7696 48.22 81.1963 48.58C80.6229 48.94 80.1696 49.4267 79.8363 50.04C79.5163 50.6533 79.3563 51.3533 79.3563 52.14C79.3563 52.9133 79.5163 53.6133 79.8363 54.24C80.1696 54.8533 80.6163 55.34 81.1763 55.7C81.7496 56.06 82.3963 56.24 83.1163 56.24ZM94.6361 57.74C93.9561 57.74 93.3494 57.6133 92.8161 57.36C92.2828 57.0933 91.8628 56.7333 91.5561 56.28C91.2494 55.8267 91.0961 55.3067 91.0961 54.72C91.0961 54.16 91.2161 53.6533 91.4561 53.2C91.6961 52.7333 92.0694 52.34 92.5761 52.02C93.0828 51.7 93.7294 51.4733 94.5161 51.34L98.7161 50.64V52L94.8761 52.64C94.1028 52.7733 93.5428 53.02 93.1961 53.38C92.8628 53.74 92.6961 54.1667 92.6961 54.66C92.6961 55.14 92.8828 55.5467 93.2561 55.88C93.6428 56.2133 94.1361 56.38 94.7361 56.38C95.4694 56.38 96.1094 56.2267 96.6561 55.92C97.2028 55.6 97.6294 55.1733 97.9361 54.64C98.2428 54.1067 98.3961 53.5133 98.3961 52.86V50.14C98.3961 49.5 98.1628 48.98 97.6961 48.58C97.2294 48.18 96.6228 47.98 95.8761 47.98C95.2228 47.98 94.6494 48.1467 94.1561 48.48C93.6628 48.8 93.2961 49.22 93.0561 49.74L91.6961 49C91.8961 48.5467 92.2094 48.1333 92.6361 47.76C93.0761 47.3867 93.5761 47.0933 94.1361 46.88C94.6961 46.6533 95.2761 46.54 95.8761 46.54C96.6628 46.54 97.3561 46.6933 97.9561 47C98.5694 47.3067 99.0428 47.7333 99.3761 48.28C99.7228 48.8133 99.8961 49.4333 99.8961 50.14V57.5H98.3961V55.36L98.6161 55.58C98.4294 55.98 98.1361 56.3467 97.7361 56.68C97.3494 57 96.8894 57.26 96.3561 57.46C95.8361 57.6467 95.2628 57.74 94.6361 57.74ZM102.981 57.5V46.78H104.481V48.82L104.241 48.52C104.535 47.8933 104.968 47.4067 105.541 47.06C106.128 46.7133 106.768 46.54 107.461 46.54C108.288 46.54 109.035 46.7733 109.701 47.24C110.368 47.7067 110.841 48.3133 111.121 49.06L110.701 49.08C110.968 48.2533 111.428 47.6267 112.081 47.2C112.748 46.76 113.481 46.54 114.281 46.54C115.001 46.54 115.661 46.7133 116.261 47.06C116.875 47.4067 117.361 47.8867 117.721 48.5C118.095 49.1 118.281 49.78 118.281 50.54V57.5H116.781V51.12C116.781 50.4667 116.661 49.9133 116.421 49.46C116.195 49.0067 115.881 48.66 115.481 48.42C115.081 48.1667 114.621 48.04 114.101 48.04C113.595 48.04 113.135 48.1667 112.721 48.42C112.308 48.66 111.981 49.0133 111.741 49.48C111.501 49.9333 111.381 50.48 111.381 51.12V57.5H109.881V51.12C109.881 50.4667 109.761 49.9133 109.521 49.46C109.295 49.0067 108.981 48.66 108.581 48.42C108.181 48.1667 107.721 48.04 107.201 48.04C106.681 48.04 106.215 48.1667 105.801 48.42C105.401 48.66 105.081 49.0133 104.841 49.48C104.601 49.9333 104.481 50.48 104.481 51.12V57.5H102.981ZM124.764 57.5V42.6H134.364V44.1H126.364V49.28H133.964V50.78H126.364V56H134.364V57.5H124.764ZM136.79 57.5V42.36H138.29V57.5H136.79ZM141.36 57.5V46.78H142.86V48.82L142.62 48.52C142.914 47.8933 143.347 47.4067 143.92 47.06C144.507 46.7133 145.147 46.54 145.84 46.54C146.667 46.54 147.414 46.7733 148.08 47.24C148.747 47.7067 149.22 48.3133 149.5 49.06L149.08 49.08C149.347 48.2533 149.807 47.6267 150.46 47.2C151.127 46.76 151.86 46.54 152.66 46.54C153.38 46.54 154.04 46.7133 154.64 47.06C155.254 47.4067 155.74 47.8867 156.1 48.5C156.474 49.1 156.66 49.78 156.66 50.54V57.5H155.16V51.12C155.16 50.4667 155.04 49.9133 154.8 49.46C154.574 49.0067 154.26 48.66 153.86 48.42C153.46 48.1667 153 48.04 152.48 48.04C151.974 48.04 151.514 48.1667 151.1 48.42C150.687 48.66 150.36 49.0133 150.12 49.48C149.88 49.9333 149.76 50.48 149.76 51.12V57.5H148.26V51.12C148.26 50.4667 148.14 49.9133 147.9 49.46C147.674 49.0067 147.36 48.66 146.96 48.42C146.56 48.1667 146.1 48.04 145.58 48.04C145.06 48.04 144.594 48.1667 144.18 48.42C143.78 48.66 143.46 49.0133 143.22 49.48C142.98 49.9333 142.86 50.48 142.86 51.12V57.5H141.36ZM164.544 57.74C163.531 57.74 162.611 57.5 161.784 57.02C160.958 56.5267 160.298 55.86 159.804 55.02C159.324 54.1667 159.084 53.2 159.084 52.12C159.084 51.0533 159.324 50.1 159.804 49.26C160.284 48.42 160.931 47.76 161.744 47.28C162.571 46.7867 163.504 46.54 164.544 46.54C165.584 46.54 166.511 46.78 167.324 47.26C168.151 47.74 168.798 48.4 169.264 49.24C169.744 50.08 169.984 51.04 169.984 52.12C169.984 53.2133 169.738 54.1867 169.244 55.04C168.751 55.88 168.091 56.54 167.264 57.02C166.451 57.5 165.544 57.74 164.544 57.74ZM164.544 56.24C165.264 56.24 165.911 56.06 166.484 55.7C167.071 55.34 167.531 54.8467 167.864 54.22C168.211 53.5933 168.384 52.8933 168.384 52.12C168.384 51.3467 168.211 50.6533 167.864 50.04C167.531 49.4267 167.071 48.94 166.484 48.58C165.911 48.22 165.264 48.04 164.544 48.04C163.824 48.04 163.171 48.22 162.584 48.58C162.011 48.94 161.551 49.4267 161.204 50.04C160.858 50.6533 160.684 51.3467 160.684 52.12C160.684 52.8933 160.858 53.5933 161.204 54.22C161.551 54.8467 162.011 55.34 162.584 55.7C163.171 56.06 163.824 56.24 164.544 56.24ZM172.63 57.5V46.78H174.13V48.54L173.93 48.28C174.183 47.7733 174.563 47.3733 175.07 47.08C175.59 46.7867 176.217 46.64 176.95 46.64H177.63V48.14H176.69C175.917 48.14 175.297 48.38 174.83 48.86C174.363 49.34 174.13 50.02 174.13 50.9V57.5H172.63ZM184.268 57.74C183.268 57.74 182.361 57.5 181.548 57.02C180.748 56.5267 180.114 55.8533 179.648 55C179.181 54.1467 178.948 53.18 178.948 52.1C178.948 51.02 179.174 50.0667 179.628 49.24C180.081 48.4 180.694 47.74 181.468 47.26C182.254 46.78 183.134 46.54 184.108 46.54C184.881 46.54 185.568 46.6867 186.168 46.98C186.781 47.26 187.301 47.6467 187.728 48.14C188.154 48.62 188.481 49.1667 188.708 49.78C188.934 50.38 189.048 51 189.048 51.64C189.048 51.7733 189.041 51.9267 189.028 52.1C189.014 52.26 188.994 52.4267 188.968 52.6H179.908V51.2H188.108L187.388 51.8C187.508 51.0667 187.421 50.4133 187.128 49.84C186.848 49.2533 186.441 48.7933 185.908 48.46C185.374 48.1133 184.774 47.94 184.108 47.94C183.441 47.94 182.821 48.1133 182.248 48.46C181.688 48.8067 181.248 49.2933 180.928 49.92C180.608 50.5333 180.481 51.2667 180.548 52.12C180.481 52.9733 180.614 53.72 180.948 54.36C181.294 54.9867 181.761 55.4733 182.348 55.82C182.948 56.1667 183.588 56.34 184.268 56.34C185.054 56.34 185.714 56.1533 186.248 55.78C186.781 55.4067 187.214 54.94 187.548 54.38L188.828 55.06C188.614 55.54 188.288 55.9867 187.848 56.4C187.408 56.8 186.881 57.1267 186.268 57.38C185.668 57.62 185.001 57.74 184.268 57.74Z"
        fill="#EDEDEF"
      />
      <path d="M251 1V79" stroke="#E1E1FE" strokeOpacity="0.15" />
      <path
        d="M315.746 31.668C315.083 31.668 314.477 31.5467 313.926 31.304C313.375 31.052 312.909 30.7113 312.526 30.282C312.143 29.8527 311.868 29.372 311.7 28.84L312.89 28.35C313.142 29.022 313.515 29.54 314.01 29.904C314.514 30.2587 315.102 30.436 315.774 30.436C316.185 30.436 316.544 30.3707 316.852 30.24C317.16 30.1093 317.398 29.9273 317.566 29.694C317.743 29.4513 317.832 29.1713 317.832 28.854C317.832 28.4153 317.706 28.07 317.454 27.818C317.211 27.5567 316.852 27.3607 316.376 27.23L314.458 26.642C313.702 26.4087 313.123 26.04 312.722 25.536C312.321 25.032 312.12 24.4533 312.12 23.8C312.12 23.2307 312.255 22.7313 312.526 22.302C312.806 21.8633 313.189 21.5227 313.674 21.28C314.169 21.028 314.729 20.902 315.354 20.902C315.979 20.902 316.544 21.014 317.048 21.238C317.561 21.462 317.995 21.7653 318.35 22.148C318.705 22.5213 318.966 22.9507 319.134 23.436L317.958 23.926C317.734 23.338 317.398 22.8947 316.95 22.596C316.502 22.288 315.975 22.134 315.368 22.134C314.995 22.134 314.663 22.1993 314.374 22.33C314.094 22.4513 313.875 22.6333 313.716 22.876C313.567 23.1093 313.492 23.3893 313.492 23.716C313.492 24.0987 313.613 24.4393 313.856 24.738C314.099 25.0367 314.467 25.2653 314.962 25.424L316.712 25.942C317.533 26.194 318.154 26.5533 318.574 27.02C318.994 27.4867 319.204 28.0653 319.204 28.756C319.204 29.3253 319.055 29.8293 318.756 30.268C318.467 30.7067 318.061 31.052 317.538 31.304C317.025 31.5467 316.427 31.668 315.746 31.668ZM326.295 31.668C325.557 31.668 324.876 31.5373 324.251 31.276C323.635 31.0053 323.093 30.6273 322.627 30.142C322.169 29.6567 321.815 29.0873 321.563 28.434C321.311 27.7807 321.185 27.0667 321.185 26.292C321.185 25.508 321.311 24.7893 321.563 24.136C321.815 23.4827 322.169 22.9133 322.627 22.428C323.084 21.9427 323.625 21.5693 324.251 21.308C324.876 21.0373 325.557 20.902 326.295 20.902C327.013 20.902 327.657 21.028 328.227 21.28C328.805 21.532 329.291 21.8587 329.683 22.26C330.084 22.6613 330.369 23.0907 330.537 23.548L329.277 24.122C329.034 23.5433 328.656 23.0767 328.143 22.722C327.629 22.358 327.013 22.176 326.295 22.176C325.567 22.176 324.918 22.3487 324.349 22.694C323.789 23.0393 323.35 23.52 323.033 24.136C322.715 24.752 322.557 25.4707 322.557 26.292C322.557 27.104 322.715 27.818 323.033 28.434C323.35 29.05 323.789 29.5307 324.349 29.876C324.918 30.2213 325.567 30.394 326.295 30.394C327.013 30.394 327.629 30.2167 328.143 29.862C328.656 29.498 329.034 29.0267 329.277 28.448L330.537 29.022C330.369 29.4793 330.084 29.9087 329.683 30.31C329.291 30.7113 328.805 31.038 328.227 31.29C327.657 31.542 327.013 31.668 326.295 31.668ZM332.683 31.5V21.07H336.365C337.056 21.07 337.662 21.2007 338.185 21.462C338.708 21.7233 339.114 22.0967 339.403 22.582C339.702 23.0673 339.851 23.6367 339.851 24.29C339.851 25.0273 339.664 25.6527 339.291 26.166C338.918 26.6793 338.414 27.048 337.779 27.272L340.201 31.5H338.605L336.057 26.978L336.967 27.51H334.055V31.5H332.683ZM334.055 26.25H336.407C336.818 26.25 337.177 26.1707 337.485 26.012C337.793 25.8533 338.031 25.6247 338.199 25.326C338.376 25.0273 338.465 24.682 338.465 24.29C338.465 23.8887 338.376 23.5433 338.199 23.254C338.031 22.9553 337.793 22.7267 337.485 22.568C337.177 22.4093 336.818 22.33 336.407 22.33H334.055V26.25ZM342.041 31.5V21.07H348.831V22.33H343.413V25.634H348.551V26.894H343.413V30.24H348.831V31.5H342.041ZM350.811 31.5V21.07H357.601V22.33H352.183V25.634H357.321V26.894H352.183V30.24H357.601V31.5H350.811ZM359.582 31.5V21.07H360.73L366.722 29.498L366.204 29.554V21.07H367.59V31.5H366.442L360.478 23.016L360.954 22.96V31.5H359.582ZM370.197 31.5V21.07H371.569V31.5H370.197ZM374.169 31.5V21.07H375.317L381.309 29.498L380.791 29.554V21.07H382.177V31.5H381.029L375.065 23.016L375.541 22.96V31.5H374.169ZM389.601 31.668C388.863 31.668 388.182 31.5373 387.557 31.276C386.931 31.0053 386.39 30.6273 385.933 30.142C385.475 29.6567 385.116 29.0873 384.855 28.434C384.603 27.7807 384.477 27.0667 384.477 26.292C384.477 25.508 384.603 24.7893 384.855 24.136C385.107 23.4827 385.461 22.9133 385.919 22.428C386.376 21.9427 386.917 21.5693 387.543 21.308C388.168 21.0373 388.849 20.902 389.587 20.902C390.305 20.902 390.949 21.028 391.519 21.28C392.097 21.532 392.583 21.8587 392.975 22.26C393.376 22.6613 393.661 23.0907 393.829 23.548L392.597 24.15C392.354 23.5433 391.976 23.0627 391.463 22.708C390.949 22.3533 390.324 22.176 389.587 22.176C388.859 22.176 388.21 22.3487 387.641 22.694C387.081 23.0393 386.642 23.52 386.325 24.136C386.007 24.752 385.849 25.4707 385.849 26.292C385.849 27.104 386.007 27.818 386.325 28.434C386.651 29.05 387.095 29.5307 387.655 29.876C388.224 30.2213 388.873 30.394 389.601 30.394C390.235 30.394 390.809 30.2587 391.323 29.988C391.836 29.7173 392.242 29.344 392.541 28.868C392.839 28.392 392.989 27.8413 392.989 27.216V26.572L393.619 27.16H389.587V25.97H394.375V26.894C394.375 27.622 394.249 28.28 393.997 28.868C393.745 29.456 393.399 29.96 392.961 30.38C392.522 30.7907 392.013 31.108 391.435 31.332C390.856 31.556 390.245 31.668 389.601 31.668Z"
        fill="#A09FA6"
      />
      <path
        d="M319.78 57.74C318.74 57.74 317.767 57.5533 316.86 57.18C315.967 56.7933 315.18 56.26 314.5 55.58C313.82 54.8867 313.287 54.0733 312.9 53.14C312.513 52.1933 312.32 51.16 312.32 50.04C312.32 48.92 312.513 47.8933 312.9 46.96C313.287 46.0133 313.82 45.2 314.5 44.52C315.18 43.8267 315.967 43.2933 316.86 42.92C317.767 42.5467 318.74 42.36 319.78 42.36C320.82 42.36 321.787 42.5533 322.68 42.94C323.587 43.3133 324.38 43.8467 325.06 44.54C325.74 45.22 326.273 46.0267 326.66 46.96C327.047 47.8933 327.24 48.92 327.24 50.04C327.24 51.16 327.047 52.1933 326.66 53.14C326.273 54.0733 325.74 54.8867 325.06 55.58C324.38 56.26 323.587 56.7933 322.68 57.18C321.787 57.5533 320.82 57.74 319.78 57.74ZM319.78 56.24C320.647 56.24 321.433 56.08 322.14 55.76C322.86 55.44 323.48 54.9933 324 54.42C324.52 53.8467 324.92 53.1867 325.2 52.44C325.493 51.6933 325.64 50.8933 325.64 50.04C325.64 49.2 325.493 48.4067 325.2 47.66C324.92 46.9133 324.52 46.2533 324 45.68C323.48 45.1067 322.86 44.66 322.14 44.34C321.433 44.02 320.647 43.86 319.78 43.86C318.913 43.86 318.12 44.02 317.4 44.34C316.693 44.66 316.08 45.1067 315.56 45.68C315.04 46.2533 314.633 46.9133 314.34 47.66C314.06 48.4067 313.92 49.2 313.92 50.04C313.92 50.8933 314.06 51.6933 314.34 52.44C314.633 53.1867 315.04 53.8467 315.56 54.42C316.08 54.9933 316.7 55.44 317.42 55.76C318.14 56.08 318.927 56.24 319.78 56.24ZM328.999 57.5V56.2L335.459 47.7L335.739 48.28H329.339V46.78H337.059V48.08L330.619 56.58L330.339 56H337.099V57.5H328.999ZM342.183 57.74C341.503 57.74 340.896 57.6133 340.363 57.36C339.83 57.0933 339.41 56.7333 339.103 56.28C338.796 55.8267 338.643 55.3067 338.643 54.72C338.643 54.16 338.763 53.6533 339.003 53.2C339.243 52.7333 339.616 52.34 340.123 52.02C340.63 51.7 341.276 51.4733 342.063 51.34L346.263 50.64V52L342.423 52.64C341.65 52.7733 341.09 53.02 340.743 53.38C340.41 53.74 340.243 54.1667 340.243 54.66C340.243 55.14 340.43 55.5467 340.803 55.88C341.19 56.2133 341.683 56.38 342.283 56.38C343.016 56.38 343.656 56.2267 344.203 55.92C344.75 55.6 345.176 55.1733 345.483 54.64C345.79 54.1067 345.943 53.5133 345.943 52.86V50.14C345.943 49.5 345.71 48.98 345.243 48.58C344.776 48.18 344.17 47.98 343.423 47.98C342.77 47.98 342.196 48.1467 341.703 48.48C341.21 48.8 340.843 49.22 340.603 49.74L339.243 49C339.443 48.5467 339.756 48.1333 340.183 47.76C340.623 47.3867 341.123 47.0933 341.683 46.88C342.243 46.6533 342.823 46.54 343.423 46.54C344.21 46.54 344.903 46.6933 345.503 47C346.116 47.3067 346.59 47.7333 346.923 48.28C347.27 48.8133 347.443 49.4333 347.443 50.14V57.5H345.943V55.36L346.163 55.58C345.976 55.98 345.683 56.3467 345.283 56.68C344.896 57 344.436 57.26 343.903 57.46C343.383 57.6467 342.81 57.74 342.183 57.74ZM350.528 57.5V46.78H352.028V48.54L351.828 48.28C352.082 47.7733 352.462 47.3733 352.968 47.08C353.488 46.7867 354.115 46.64 354.848 46.64H355.528V48.14H354.588C353.815 48.14 353.195 48.38 352.728 48.86C352.262 49.34 352.028 50.02 352.028 50.9V57.5H350.528ZM357.286 57.5V42.36H358.786V52.96L358.146 52.86L364.166 46.78H366.106L361.906 51.08L366.486 57.5H364.686L360.386 51.56L361.346 51.64L358.286 54.8L358.786 53.56V57.5H357.286ZM371.963 57.74C370.936 57.74 370.036 57.48 369.263 56.96C368.49 56.44 367.93 55.7333 367.583 54.84L368.843 54.24C369.15 54.8933 369.576 55.4133 370.123 55.8C370.683 56.1867 371.296 56.38 371.963 56.38C372.603 56.38 373.143 56.2267 373.583 55.92C374.023 55.6 374.243 55.1867 374.243 54.68C374.243 54.3067 374.136 54.0133 373.923 53.8C373.71 53.5733 373.463 53.4 373.183 53.28C372.903 53.16 372.656 53.0733 372.443 53.02L370.903 52.58C369.916 52.3 369.203 51.9067 368.763 51.4C368.323 50.8933 368.103 50.3067 368.103 49.64C368.103 49.0133 368.263 48.4667 368.583 48C368.903 47.5333 369.336 47.1733 369.883 46.92C370.43 46.6667 371.036 46.54 371.703 46.54C372.61 46.54 373.43 46.78 374.163 47.26C374.91 47.7267 375.436 48.38 375.743 49.22L374.463 49.82C374.196 49.22 373.81 48.7533 373.303 48.42C372.81 48.0733 372.256 47.9 371.643 47.9C371.043 47.9 370.563 48.0533 370.203 48.36C369.843 48.6667 369.663 49.0533 369.663 49.52C369.663 49.88 369.756 50.1667 369.943 50.38C370.13 50.5933 370.343 50.7533 370.583 50.86C370.836 50.9667 371.056 51.0467 371.243 51.1L373.023 51.62C373.89 51.8733 374.563 52.2667 375.043 52.8C375.536 53.3333 375.783 53.96 375.783 54.68C375.783 55.2667 375.616 55.7933 375.283 56.26C374.963 56.7267 374.516 57.0933 373.943 57.36C373.37 57.6133 372.71 57.74 371.963 57.74ZM378.479 60.1V59.4C378.879 59.2933 379.172 59.0867 379.359 58.78C379.546 58.4733 379.639 58.0467 379.639 57.5H378.879V55.3H380.479V56.98C380.479 57.8467 380.312 58.54 379.979 59.06C379.646 59.5933 379.146 59.94 378.479 60.1ZM387.428 57.5V42.6H388.828L394.428 50.72H393.648L399.228 42.6H400.628V57.5H399.028V44.76L399.548 44.96L394.068 52.9H393.988L388.528 44.96L389.028 44.76V57.5H387.428ZM411.167 57.74C410.127 57.74 409.153 57.5533 408.247 57.18C407.353 56.7933 406.567 56.26 405.887 55.58C405.207 54.8867 404.673 54.0733 404.287 53.14C403.9 52.1933 403.707 51.16 403.707 50.04C403.707 48.92 403.9 47.8933 404.287 46.96C404.673 46.0133 405.207 45.2 405.887 44.52C406.567 43.8267 407.353 43.2933 408.247 42.92C409.153 42.5467 410.127 42.36 411.167 42.36C412.207 42.36 413.173 42.5533 414.067 42.94C414.973 43.3133 415.767 43.8467 416.447 44.54C417.127 45.22 417.66 46.0267 418.047 46.96C418.433 47.8933 418.627 48.92 418.627 50.04C418.627 51.16 418.433 52.1933 418.047 53.14C417.66 54.0733 417.127 54.8867 416.447 55.58C415.767 56.26 414.973 56.7933 414.067 57.18C413.173 57.5533 412.207 57.74 411.167 57.74ZM411.167 56.24C412.033 56.24 412.82 56.08 413.527 55.76C414.247 55.44 414.867 54.9933 415.387 54.42C415.907 53.8467 416.307 53.1867 416.587 52.44C416.88 51.6933 417.027 50.8933 417.027 50.04C417.027 49.2 416.88 48.4067 416.587 47.66C416.307 46.9133 415.907 46.2533 415.387 45.68C414.867 45.1067 414.247 44.66 413.527 44.34C412.82 44.02 412.033 43.86 411.167 43.86C410.3 43.86 409.507 44.02 408.787 44.34C408.08 44.66 407.467 45.1067 406.947 45.68C406.427 46.2533 406.02 46.9133 405.727 47.66C405.447 48.4067 405.307 49.2 405.307 50.04C405.307 50.8933 405.447 51.6933 405.727 52.44C406.02 53.1867 406.427 53.8467 406.947 54.42C407.467 54.9933 408.087 55.44 408.807 55.76C409.527 56.08 410.313 56.24 411.167 56.24ZM421.545 60.1V59.4C421.945 59.2933 422.239 59.0867 422.425 58.78C422.612 58.4733 422.705 58.0467 422.705 57.5H421.945V55.3H423.545V56.98C423.545 57.8467 423.379 58.54 423.045 59.06C422.712 59.5933 422.212 59.94 421.545 60.1ZM435.734 57.74C434.681 57.74 433.754 57.52 432.954 57.08C432.154 56.64 431.534 56.04 431.094 55.28C430.654 54.5067 430.434 53.6267 430.434 52.64V42.6H432.034V52.64C432.034 53.36 432.188 53.9933 432.494 54.54C432.814 55.0733 433.248 55.4933 433.794 55.8C434.354 56.0933 435.001 56.24 435.734 56.24C436.468 56.24 437.108 56.0933 437.654 55.8C438.214 55.4933 438.648 55.0733 438.954 54.54C439.274 53.9933 439.434 53.36 439.434 52.64V42.6H441.034V52.64C441.034 53.6267 440.814 54.5067 440.374 55.28C439.934 56.04 439.314 56.64 438.514 57.08C437.728 57.52 436.801 57.74 435.734 57.74ZM449.518 57.74C448.572 57.74 447.712 57.56 446.938 57.2C446.165 56.84 445.512 56.36 444.978 55.76C444.445 55.1467 444.065 54.4733 443.838 53.74L445.278 53.2C445.625 54.2133 446.165 54.9867 446.898 55.52C447.632 56.04 448.505 56.3 449.518 56.3C450.158 56.3 450.718 56.2 451.198 56C451.692 55.7867 452.072 55.4933 452.338 55.12C452.605 54.7467 452.738 54.3133 452.738 53.82C452.738 53.0867 452.538 52.52 452.138 52.12C451.738 51.72 451.165 51.4133 450.418 51.2L447.738 50.4C446.685 50.0933 445.872 49.58 445.298 48.86C444.738 48.14 444.458 47.32 444.458 46.4C444.458 45.6133 444.652 44.92 445.038 44.32C445.425 43.7067 445.952 43.2267 446.618 42.88C447.298 42.5333 448.065 42.36 448.918 42.36C449.812 42.36 450.612 42.5267 451.318 42.86C452.038 43.18 452.645 43.6067 453.138 44.14C453.632 44.6733 453.985 45.2667 454.198 45.92L452.798 46.48C452.478 45.6 451.978 44.9333 451.298 44.48C450.632 44.0267 449.845 43.8 448.938 43.8C448.365 43.8 447.858 43.9 447.418 44.1C446.992 44.3 446.658 44.5867 446.418 44.96C446.178 45.3333 446.058 45.7733 446.058 46.28C446.058 46.8933 446.252 47.4467 446.638 47.94C447.025 48.42 447.618 48.78 448.418 49.02L450.778 49.72C451.952 50.0667 452.838 50.5667 453.438 51.22C454.038 51.8733 454.338 52.6933 454.338 53.68C454.338 54.48 454.132 55.1867 453.718 55.8C453.318 56.4 452.752 56.8733 452.018 57.22C451.298 57.5667 450.465 57.74 449.518 57.74ZM455.888 57.5L461.328 42.6H463.048L468.488 57.5H466.808L465.528 53.86H458.868L457.568 57.5H455.888ZM459.388 52.36H464.968L461.948 43.8H462.428L459.388 52.36Z"
        fill="#EDEDEF"
      />
      <path d="M529 1V79" stroke="#E1E1FE" strokeOpacity="0.15" />
      <path
        d="M594.978 31.668C594.241 31.668 593.559 31.5373 592.934 31.276C592.309 31.0053 591.767 30.6273 591.31 30.142C590.853 29.6567 590.493 29.0873 590.232 28.434C589.98 27.7807 589.854 27.0667 589.854 26.292C589.854 25.508 589.98 24.7893 590.232 24.136C590.484 23.4827 590.839 22.9133 591.296 22.428C591.753 21.9427 592.295 21.5693 592.92 21.308C593.545 21.0373 594.227 20.902 594.964 20.902C595.683 20.902 596.327 21.028 596.896 21.28C597.475 21.532 597.96 21.8587 598.352 22.26C598.753 22.6613 599.038 23.0907 599.206 23.548L597.974 24.15C597.731 23.5433 597.353 23.0627 596.84 22.708C596.327 22.3533 595.701 22.176 594.964 22.176C594.236 22.176 593.587 22.3487 593.018 22.694C592.458 23.0393 592.019 23.52 591.702 24.136C591.385 24.752 591.226 25.4707 591.226 26.292C591.226 27.104 591.385 27.818 591.702 28.434C592.029 29.05 592.472 29.5307 593.032 29.876C593.601 30.2213 594.25 30.394 594.978 30.394C595.613 30.394 596.187 30.2587 596.7 29.988C597.213 29.7173 597.619 29.344 597.918 28.868C598.217 28.392 598.366 27.8413 598.366 27.216V26.572L598.996 27.16H594.964V25.97H599.752V26.894C599.752 27.622 599.626 28.28 599.374 28.868C599.122 29.456 598.777 29.96 598.338 30.38C597.899 30.7907 597.391 31.108 596.812 31.332C596.233 31.556 595.622 31.668 594.978 31.668ZM601.885 31.5V21.07H608.675V22.33H603.257V25.634H608.395V26.894H603.257V30.24H608.675V31.5H601.885ZM610.656 31.5V21.07H611.804L617.796 29.498L617.278 29.554V21.07H618.664V31.5H617.516L611.552 23.016L612.028 22.96V31.5H610.656ZM621.272 31.5V21.07H624.954C625.644 21.07 626.251 21.2007 626.774 21.462C627.296 21.7233 627.702 22.0967 627.992 22.582C628.29 23.0673 628.44 23.6367 628.44 24.29C628.44 25.0273 628.253 25.6527 627.88 26.166C627.506 26.6793 627.002 27.048 626.368 27.272L628.79 31.5H627.194L624.646 26.978L625.556 27.51H622.644V31.5H621.272ZM622.644 26.25H624.996C625.406 26.25 625.766 26.1707 626.074 26.012C626.382 25.8533 626.62 25.6247 626.788 25.326C626.965 25.0273 627.054 24.682 627.054 24.29C627.054 23.8887 626.965 23.5433 626.788 23.254C626.62 22.9553 626.382 22.7267 626.074 22.568C625.766 22.4093 625.406 22.33 624.996 22.33H622.644V26.25ZM630.63 31.5V21.07H637.42V22.33H632.002V25.634H637.14V26.894H632.002V30.24H637.42V31.5H630.63Z"
        fill="#A09FA6"
      />
      <path
        d="M595.78 57.74C594.833 57.74 593.973 57.56 593.2 57.2C592.427 56.84 591.773 56.36 591.24 55.76C590.707 55.1467 590.327 54.4733 590.1 53.74L591.54 53.2C591.887 54.2133 592.427 54.9867 593.16 55.52C593.893 56.04 594.767 56.3 595.78 56.3C596.42 56.3 596.98 56.2 597.46 56C597.953 55.7867 598.333 55.4933 598.6 55.12C598.867 54.7467 599 54.3133 599 53.82C599 53.0867 598.8 52.52 598.4 52.12C598 51.72 597.427 51.4133 596.68 51.2L594 50.4C592.947 50.0933 592.133 49.58 591.56 48.86C591 48.14 590.72 47.32 590.72 46.4C590.72 45.6133 590.913 44.92 591.3 44.32C591.687 43.7067 592.213 43.2267 592.88 42.88C593.56 42.5333 594.327 42.36 595.18 42.36C596.073 42.36 596.873 42.5267 597.58 42.86C598.3 43.18 598.907 43.6067 599.4 44.14C599.893 44.6733 600.247 45.2667 600.46 45.92L599.06 46.48C598.74 45.6 598.24 44.9333 597.56 44.48C596.893 44.0267 596.107 43.8 595.2 43.8C594.627 43.8 594.12 43.9 593.68 44.1C593.253 44.3 592.92 44.5867 592.68 44.96C592.44 45.3333 592.32 45.7733 592.32 46.28C592.32 46.8933 592.513 47.4467 592.9 47.94C593.287 48.42 593.88 48.78 594.68 49.02L597.04 49.72C598.213 50.0667 599.1 50.5667 599.7 51.22C600.3 51.8733 600.6 52.6933 600.6 53.68C600.6 54.48 600.393 55.1867 599.98 55.8C599.58 56.4 599.013 56.8733 598.28 57.22C597.56 57.5667 596.727 57.74 595.78 57.74ZM608.49 57.74C607.476 57.74 606.556 57.5 605.73 57.02C604.903 56.5267 604.243 55.86 603.75 55.02C603.27 54.1667 603.03 53.2 603.03 52.12C603.03 51.0533 603.27 50.1 603.75 49.26C604.23 48.42 604.876 47.76 605.69 47.28C606.516 46.7867 607.45 46.54 608.49 46.54C609.53 46.54 610.456 46.78 611.27 47.26C612.096 47.74 612.743 48.4 613.21 49.24C613.69 50.08 613.93 51.04 613.93 52.12C613.93 53.2133 613.683 54.1867 613.19 55.04C612.696 55.88 612.036 56.54 611.21 57.02C610.396 57.5 609.49 57.74 608.49 57.74ZM608.49 56.24C609.21 56.24 609.856 56.06 610.43 55.7C611.016 55.34 611.476 54.8467 611.81 54.22C612.156 53.5933 612.33 52.8933 612.33 52.12C612.33 51.3467 612.156 50.6533 611.81 50.04C611.476 49.4267 611.016 48.94 610.43 48.58C609.856 48.22 609.21 48.04 608.49 48.04C607.77 48.04 607.116 48.22 606.53 48.58C605.956 48.94 605.496 49.4267 605.15 50.04C604.803 50.6533 604.63 51.3467 604.63 52.12C604.63 52.8933 604.803 53.5933 605.15 54.22C605.496 54.8467 605.956 55.34 606.53 55.7C607.116 56.06 607.77 56.24 608.49 56.24ZM617.285 57.5V48.28H615.145V46.78H617.285V45.82C617.285 45.0733 617.451 44.4467 617.785 43.94C618.118 43.42 618.558 43.0267 619.105 42.76C619.651 42.4933 620.238 42.36 620.865 42.36C620.998 42.36 621.151 42.3733 621.325 42.4C621.498 42.4133 621.638 42.4333 621.745 42.46V43.82C621.651 43.7933 621.525 43.78 621.365 43.78C621.205 43.7667 621.091 43.76 621.025 43.76C620.385 43.76 619.851 43.9133 619.425 44.22C618.998 44.5267 618.785 45.06 618.785 45.82V46.78H621.405V48.28H618.785V57.5H617.285ZM628.331 57.62C627.371 57.62 626.631 57.34 626.111 56.78C625.591 56.22 625.331 55.42 625.331 54.38V48.28H623.351V46.78H623.851C624.305 46.78 624.665 46.6333 624.931 46.34C625.198 46.0333 625.331 45.6533 625.331 45.2V44.3H626.831V46.78H629.191V48.28H626.831V54.38C626.831 54.74 626.885 55.06 626.991 55.34C627.098 55.6067 627.278 55.82 627.531 55.98C627.798 56.14 628.151 56.22 628.591 56.22C628.698 56.22 628.825 56.2133 628.971 56.2C629.118 56.1867 629.245 56.1733 629.351 56.16V57.5C629.191 57.54 629.011 57.5667 628.811 57.58C628.611 57.6067 628.451 57.62 628.331 57.62ZM634.345 57.5L630.665 46.78H632.365L635.405 56.16H634.805L637.665 46.78H639.165L642.025 56.16H641.425L644.485 46.78H646.165L642.485 57.5H640.985L638.205 48.32H638.625L635.845 57.5H634.345ZM650.632 57.74C649.952 57.74 649.346 57.6133 648.812 57.36C648.279 57.0933 647.859 56.7333 647.552 56.28C647.246 55.8267 647.092 55.3067 647.092 54.72C647.092 54.16 647.212 53.6533 647.452 53.2C647.692 52.7333 648.066 52.34 648.572 52.02C649.079 51.7 649.726 51.4733 650.512 51.34L654.712 50.64V52L650.872 52.64C650.099 52.7733 649.539 53.02 649.192 53.38C648.859 53.74 648.692 54.1667 648.692 54.66C648.692 55.14 648.879 55.5467 649.252 55.88C649.639 56.2133 650.132 56.38 650.732 56.38C651.466 56.38 652.106 56.2267 652.652 55.92C653.199 55.6 653.626 55.1733 653.932 54.64C654.239 54.1067 654.392 53.5133 654.392 52.86V50.14C654.392 49.5 654.159 48.98 653.692 48.58C653.226 48.18 652.619 47.98 651.872 47.98C651.219 47.98 650.646 48.1467 650.152 48.48C649.659 48.8 649.292 49.22 649.052 49.74L647.692 49C647.892 48.5467 648.206 48.1333 648.632 47.76C649.072 47.3867 649.572 47.0933 650.132 46.88C650.692 46.6533 651.272 46.54 651.872 46.54C652.659 46.54 653.352 46.6933 653.952 47C654.566 47.3067 655.039 47.7333 655.372 48.28C655.719 48.8133 655.892 49.4333 655.892 50.14V57.5H654.392V55.36L654.612 55.58C654.426 55.98 654.132 56.3467 653.732 56.68C653.346 57 652.886 57.26 652.352 57.46C651.832 57.6467 651.259 57.74 650.632 57.74ZM658.978 57.5V46.78H660.478V48.54L660.278 48.28C660.531 47.7733 660.911 47.3733 661.418 47.08C661.938 46.7867 662.564 46.64 663.298 46.64H663.978V48.14H663.038C662.264 48.14 661.644 48.38 661.178 48.86C660.711 49.34 660.478 50.02 660.478 50.9V57.5H658.978ZM670.615 57.74C669.615 57.74 668.709 57.5 667.895 57.02C667.095 56.5267 666.462 55.8533 665.995 55C665.529 54.1467 665.295 53.18 665.295 52.1C665.295 51.02 665.522 50.0667 665.975 49.24C666.429 48.4 667.042 47.74 667.815 47.26C668.602 46.78 669.482 46.54 670.455 46.54C671.229 46.54 671.915 46.6867 672.515 46.98C673.129 47.26 673.649 47.6467 674.075 48.14C674.502 48.62 674.829 49.1667 675.055 49.78C675.282 50.38 675.395 51 675.395 51.64C675.395 51.7733 675.389 51.9267 675.375 52.1C675.362 52.26 675.342 52.4267 675.315 52.6H666.255V51.2H674.455L673.735 51.8C673.855 51.0667 673.769 50.4133 673.475 49.84C673.195 49.2533 672.789 48.7933 672.255 48.46C671.722 48.1133 671.122 47.94 670.455 47.94C669.789 47.94 669.169 48.1133 668.595 48.46C668.035 48.8067 667.595 49.2933 667.275 49.92C666.955 50.5333 666.829 51.2667 666.895 52.12C666.829 52.9733 666.962 53.72 667.295 54.36C667.642 54.9867 668.109 55.4733 668.695 55.82C669.295 56.1667 669.935 56.34 670.615 56.34C671.402 56.34 672.062 56.1533 672.595 55.78C673.129 55.4067 673.562 54.94 673.895 54.38L675.175 55.06C674.962 55.54 674.635 55.9867 674.195 56.4C673.755 56.8 673.229 57.1267 672.615 57.38C672.015 57.62 671.349 57.74 670.615 57.74Z"
        fill="#EDEDEF"
      />
      <path d="M737 1V79" stroke="#E1E1FE" strokeOpacity="0.15" />
      <path
        d="M798.162 31.5V21.07H801.844C802.535 21.07 803.141 21.2007 803.664 21.462C804.187 21.7233 804.593 22.0967 804.882 22.582C805.181 23.0673 805.33 23.6367 805.33 24.29C805.33 25.0273 805.143 25.6527 804.77 26.166C804.397 26.6793 803.893 27.048 803.258 27.272L805.68 31.5H804.084L801.536 26.978L802.446 27.51H799.534V31.5H798.162ZM799.534 26.25H801.886C802.297 26.25 802.656 26.1707 802.964 26.012C803.272 25.8533 803.51 25.6247 803.678 25.326C803.855 25.0273 803.944 24.682 803.944 24.29C803.944 23.8887 803.855 23.5433 803.678 23.254C803.51 22.9553 803.272 22.7267 802.964 22.568C802.656 22.4093 802.297 22.33 801.886 22.33H799.534V26.25ZM806.512 31.5L810.25 21.07H811.874L815.612 31.5H814.142L813.288 29.05H808.836L807.982 31.5H806.512ZM809.27 27.79H812.854L810.866 22.064H811.258L809.27 27.79ZM818.329 31.5V22.33H815.501V21.07H822.501V22.33H819.715V31.5H818.329ZM824.104 31.5V21.07H825.476V31.5H824.104ZM828.075 31.5V21.07H829.223L835.215 29.498L834.697 29.554V21.07H836.083V31.5H834.935L828.971 23.016L829.447 22.96V31.5H828.075ZM843.507 31.668C842.77 31.668 842.088 31.5373 841.463 31.276C840.838 31.0053 840.296 30.6273 839.839 30.142C839.382 29.6567 839.022 29.0873 838.761 28.434C838.509 27.7807 838.383 27.0667 838.383 26.292C838.383 25.508 838.509 24.7893 838.761 24.136C839.013 23.4827 839.368 22.9133 839.825 22.428C840.282 21.9427 840.824 21.5693 841.449 21.308C842.074 21.0373 842.756 20.902 843.493 20.902C844.212 20.902 844.856 21.028 845.425 21.28C846.004 21.532 846.489 21.8587 846.881 22.26C847.282 22.6613 847.567 23.0907 847.735 23.548L846.503 24.15C846.26 23.5433 845.882 23.0627 845.369 22.708C844.856 22.3533 844.23 22.176 843.493 22.176C842.765 22.176 842.116 22.3487 841.547 22.694C840.987 23.0393 840.548 23.52 840.231 24.136C839.914 24.752 839.755 25.4707 839.755 26.292C839.755 27.104 839.914 27.818 840.231 28.434C840.558 29.05 841.001 29.5307 841.561 29.876C842.13 30.2213 842.779 30.394 843.507 30.394C844.142 30.394 844.716 30.2587 845.229 29.988C845.742 29.7173 846.148 29.344 846.447 28.868C846.746 28.392 846.895 27.8413 846.895 27.216V26.572L847.525 27.16H843.493V25.97H848.281V26.894C848.281 27.622 848.155 28.28 847.903 28.868C847.651 29.456 847.306 29.96 846.867 30.38C846.428 30.7907 845.92 31.108 845.341 31.332C844.762 31.556 844.151 31.668 843.507 31.668Z"
        fill="#A09FA6"
      />
      <path
        d="M798.76 57.5V42.6H803.88C804.853 42.6 805.707 42.7933 806.44 43.18C807.173 43.5533 807.74 44.0867 808.14 44.78C808.553 45.46 808.76 46.2533 808.76 47.16C808.76 48.0667 808.553 48.86 808.14 49.54C807.74 50.22 807.173 50.7533 806.44 51.14C805.72 51.5133 804.867 51.7 803.88 51.7H800.36V57.5H798.76ZM800.36 50.2H803.96C804.6 50.2 805.16 50.08 805.64 49.84C806.12 49.5867 806.493 49.2333 806.76 48.78C807.027 48.3133 807.16 47.7667 807.16 47.14C807.16 46.5133 807.027 45.9733 806.76 45.52C806.493 45.0667 806.12 44.72 805.64 44.48C805.16 44.2267 804.6 44.1 803.96 44.1H800.36V50.2ZM818.412 57.74C817.358 57.74 816.392 57.5533 815.512 57.18C814.632 56.7933 813.865 56.26 813.212 55.58C812.572 54.8867 812.072 54.0733 811.712 53.14C811.352 52.2067 811.172 51.18 811.172 50.06C811.172 48.94 811.352 47.9133 811.712 46.98C812.072 46.0467 812.572 45.2333 813.212 44.54C813.865 43.8467 814.632 43.3133 815.512 42.94C816.392 42.5533 817.358 42.36 818.412 42.36C819.425 42.36 820.332 42.54 821.132 42.9C821.945 43.26 822.625 43.7267 823.172 44.3C823.732 44.86 824.132 45.4533 824.372 46.08L822.932 46.78C822.558 45.8733 821.985 45.16 821.212 44.64C820.438 44.12 819.505 43.86 818.412 43.86C817.318 43.86 816.345 44.12 815.492 44.64C814.638 45.16 813.972 45.8867 813.492 46.82C813.012 47.74 812.772 48.82 812.772 50.06C812.772 51.2867 813.012 52.3667 813.492 53.3C813.972 54.2333 814.638 54.96 815.492 55.48C816.345 55.9867 817.318 56.24 818.412 56.24C819.385 56.24 820.258 56.0267 821.032 55.6C821.818 55.1733 822.438 54.5933 822.892 53.86C823.345 53.1133 823.572 52.26 823.572 51.3V50.48L824.292 51.2H818.412V49.8H825.172V51.04C825.172 52.0133 824.998 52.9133 824.652 53.74C824.305 54.5533 823.825 55.26 823.212 55.86C822.598 56.46 821.878 56.9267 821.052 57.26C820.238 57.58 819.358 57.74 818.412 57.74ZM833.296 57.5V44H830.496V42.6H834.896V57.5H833.296ZM842.978 57.74C842.204 57.74 841.491 57.6067 840.838 57.34C840.184 57.0733 839.611 56.6933 839.118 56.2C838.638 55.7067 838.271 55.12 838.018 54.44L839.298 53.84C839.604 54.6133 840.084 55.2267 840.738 55.68C841.391 56.12 842.138 56.34 842.978 56.34C843.644 56.34 844.238 56.2133 844.758 55.96C845.278 55.6933 845.684 55.3133 845.978 54.82C846.271 54.3267 846.418 53.7267 846.418 53.02C846.418 52.3133 846.264 51.7133 845.958 51.22C845.664 50.7267 845.258 50.3533 844.738 50.1C844.218 49.8467 843.624 49.72 842.958 49.72C842.784 49.72 842.591 49.7267 842.378 49.74C842.178 49.7533 842.011 49.7733 841.878 49.8L841.558 49.1L845.578 44H838.718V42.6H847.378V44L843.618 48.74L843.418 48.48C844.311 48.5067 845.104 48.72 845.798 49.12C846.491 49.5067 847.031 50.0333 847.418 50.7C847.818 51.3667 848.018 52.14 848.018 53.02C848.018 53.9 847.804 54.7 847.378 55.42C846.951 56.1267 846.358 56.6933 845.598 57.12C844.838 57.5333 843.964 57.74 842.978 57.74Z"
        fill="#EDEDEF"
      />
      <path d="M910 1V79" stroke="#E1E1FE" strokeOpacity="0.15" />
      <path
        d="M971.162 31.5V21.07H974.578C975.633 21.07 976.552 21.2847 977.336 21.714C978.12 22.1433 978.727 22.75 979.156 23.534C979.585 24.3087 979.8 25.2233 979.8 26.278C979.8 27.3233 979.585 28.238 979.156 29.022C978.727 29.806 978.12 30.4173 977.336 30.856C976.552 31.2853 975.633 31.5 974.578 31.5H971.162ZM972.534 30.24H974.592C975.367 30.24 976.034 30.0767 976.594 29.75C977.163 29.4233 977.602 28.966 977.91 28.378C978.218 27.7807 978.372 27.0807 978.372 26.278C978.372 25.466 978.213 24.766 977.896 24.178C977.588 23.59 977.149 23.1373 976.58 22.82C976.02 22.4933 975.357 22.33 974.592 22.33H972.534V30.24ZM985.599 31.668C984.843 31.668 984.171 31.5093 983.583 31.192C983.004 30.8747 982.552 30.4407 982.225 29.89C981.908 29.33 981.749 28.6953 981.749 27.986V21.07H983.135V27.958C983.135 28.434 983.238 28.8587 983.443 29.232C983.658 29.596 983.947 29.8807 984.311 30.086C984.684 30.2913 985.114 30.394 985.599 30.394C986.084 30.394 986.509 30.2913 986.873 30.086C987.246 29.8807 987.536 29.596 987.741 29.232C987.956 28.8587 988.063 28.434 988.063 27.958V21.07H989.449V27.986C989.449 28.6953 989.286 29.33 988.959 29.89C988.642 30.4407 988.194 30.8747 987.615 31.192C987.036 31.5093 986.364 31.668 985.599 31.668ZM991.984 31.5V21.07H995.666C996.356 21.07 996.963 21.2007 997.486 21.462C998.008 21.7233 998.414 22.0967 998.704 22.582C999.002 23.0673 999.152 23.6367 999.152 24.29C999.152 25.0273 998.965 25.6527 998.592 26.166C998.218 26.6793 997.714 27.048 997.08 27.272L999.502 31.5H997.906L995.358 26.978L996.268 27.51H993.356V31.5H991.984ZM993.356 26.25H995.708C996.118 26.25 996.478 26.1707 996.786 26.012C997.094 25.8533 997.332 25.6247 997.5 25.326C997.677 25.0273 997.766 24.682 997.766 24.29C997.766 23.8887 997.677 23.5433 997.5 23.254C997.332 22.9553 997.094 22.7267 996.786 22.568C996.478 22.4093 996.118 22.33 995.708 22.33H993.356V26.25ZM1000.33 31.5L1004.07 21.07H1005.7L1009.43 31.5H1007.96L1007.11 29.05H1002.66L1001.8 31.5H1000.33ZM1003.09 27.79H1006.68L1004.69 22.064H1005.08L1003.09 27.79ZM1012.15 31.5V22.33H1009.32V21.07H1016.32V22.33H1013.54V31.5H1012.15ZM1017.93 31.5V21.07H1019.3V31.5H1017.93ZM1026.88 31.668C1026.14 31.668 1025.45 31.5373 1024.81 31.276C1024.16 31.0053 1023.6 30.6273 1023.11 30.142C1022.64 29.6567 1022.27 29.0873 1021.99 28.434C1021.72 27.7713 1021.59 27.0527 1021.59 26.278C1021.59 25.494 1021.72 24.7753 1021.99 24.122C1022.27 23.4687 1022.64 22.8993 1023.11 22.414C1023.6 21.9287 1024.16 21.5553 1024.79 21.294C1025.44 21.0327 1026.13 20.902 1026.88 20.902C1027.63 20.902 1028.32 21.0373 1028.95 21.308C1029.6 21.5693 1030.16 21.9427 1030.63 22.428C1031.12 22.904 1031.5 23.4687 1031.77 24.122C1032.05 24.7753 1032.19 25.494 1032.19 26.278C1032.19 27.0527 1032.05 27.7713 1031.77 28.434C1031.5 29.0873 1031.12 29.6567 1030.63 30.142C1030.16 30.6273 1029.6 31.0053 1028.95 31.276C1028.32 31.5373 1027.63 31.668 1026.88 31.668ZM1026.88 30.394C1027.46 30.394 1027.99 30.2913 1028.46 30.086C1028.94 29.8713 1029.35 29.5773 1029.69 29.204C1030.05 28.8213 1030.32 28.3827 1030.51 27.888C1030.7 27.384 1030.8 26.8473 1030.8 26.278C1030.8 25.7087 1030.7 25.1767 1030.51 24.682C1030.32 24.1873 1030.05 23.7533 1029.69 23.38C1029.35 22.9973 1028.94 22.7033 1028.46 22.498C1027.99 22.2833 1027.46 22.176 1026.88 22.176C1026.31 22.176 1025.79 22.2833 1025.31 22.498C1024.84 22.7033 1024.42 22.9973 1024.07 23.38C1023.72 23.7533 1023.45 24.1873 1023.25 24.682C1023.06 25.1767 1022.96 25.7087 1022.96 26.278C1022.96 26.8473 1023.06 27.384 1023.25 27.888C1023.45 28.3827 1023.72 28.8213 1024.07 29.204C1024.42 29.5773 1024.84 29.8713 1025.31 30.086C1025.79 30.2913 1026.31 30.394 1026.88 30.394ZM1034.47 31.5V21.07H1035.62L1041.61 29.498L1041.09 29.554V21.07H1042.48V31.5H1041.33L1035.36 23.016L1035.84 22.96V31.5H1034.47Z"
        fill="#A09FA6"
      />
      <path
        d="M975.88 57.74C975.107 57.74 974.393 57.6067 973.74 57.34C973.087 57.0733 972.513 56.6933 972.02 56.2C971.54 55.7067 971.173 55.12 970.92 54.44L972.2 53.84C972.507 54.6133 972.987 55.2267 973.64 55.68C974.293 56.12 975.04 56.34 975.88 56.34C976.547 56.34 977.14 56.2133 977.66 55.96C978.18 55.6933 978.587 55.3133 978.88 54.82C979.173 54.3267 979.32 53.7267 979.32 53.02C979.32 52.3133 979.167 51.7133 978.86 51.22C978.567 50.7267 978.16 50.3533 977.64 50.1C977.12 49.8467 976.527 49.72 975.86 49.72C975.687 49.72 975.493 49.7267 975.28 49.74C975.08 49.7533 974.913 49.7733 974.78 49.8L974.46 49.1L978.48 44H971.62V42.6H980.28V44L976.52 48.74L976.32 48.48C977.213 48.5067 978.007 48.72 978.7 49.12C979.393 49.5067 979.933 50.0333 980.32 50.7C980.72 51.3667 980.92 52.14 980.92 53.02C980.92 53.9 980.707 54.7 980.28 55.42C979.853 56.1267 979.26 56.6933 978.5 57.12C977.74 57.5333 976.867 57.74 975.88 57.74ZM983.728 57.5V42.36H985.228V48.86L984.888 48.78C985.154 48.0867 985.588 47.54 986.188 47.14C986.801 46.74 987.508 46.54 988.308 46.54C989.068 46.54 989.748 46.7133 990.348 47.06C990.961 47.4067 991.441 47.8867 991.788 48.5C992.148 49.1 992.328 49.78 992.328 50.54V57.5H990.828V51.12C990.828 50.4667 990.708 49.9133 990.468 49.46C990.228 49.0067 989.894 48.66 989.468 48.42C989.054 48.1667 988.581 48.04 988.048 48.04C987.514 48.04 987.034 48.1667 986.608 48.42C986.181 48.66 985.841 49.0133 985.588 49.48C985.348 49.9333 985.228 50.48 985.228 51.12V57.5H983.728ZM995.192 57.5V46.78H996.692V48.54L996.492 48.28C996.746 47.7733 997.126 47.3733 997.632 47.08C998.152 46.7867 998.779 46.64 999.512 46.64H1000.19V48.14H999.252C998.479 48.14 997.859 48.38 997.392 48.86C996.926 49.34 996.692 50.02 996.692 50.9V57.5H995.192ZM1009.85 57.74C1009.08 57.74 1008.36 57.6067 1007.69 57.34C1007.04 57.0733 1006.46 56.6933 1005.97 56.2C1005.48 55.7067 1005.1 55.12 1004.85 54.44L1006.07 53.84C1006.38 54.6133 1006.88 55.2267 1007.57 55.68C1008.28 56.12 1009.04 56.34 1009.85 56.34C1010.5 56.34 1011.08 56.1867 1011.59 55.88C1012.11 55.5733 1012.52 55.16 1012.81 54.64C1013.1 54.1067 1013.25 53.5133 1013.25 52.86C1013.25 52.18 1013.1 51.58 1012.79 51.06C1012.5 50.54 1012.1 50.1333 1011.59 49.84C1011.08 49.5333 1010.51 49.38 1009.87 49.38C1009.22 49.38 1008.61 49.5333 1008.05 49.84C1007.5 50.1333 1007.1 50.4933 1006.85 50.92L1005.59 50.68L1006.71 42.6H1014.25V44H1007.29L1007.91 43.46L1007.01 49.82L1006.39 49.54C1006.86 48.9667 1007.4 48.56 1008.03 48.32C1008.66 48.0667 1009.3 47.94 1009.95 47.94C1010.91 47.94 1011.76 48.1667 1012.49 48.62C1013.22 49.06 1013.8 49.6533 1014.21 50.4C1014.64 51.1333 1014.85 51.9533 1014.85 52.86C1014.85 53.78 1014.63 54.6133 1014.19 55.36C1013.76 56.0933 1013.17 56.6733 1012.41 57.1C1011.66 57.5267 1010.81 57.74 1009.85 57.74ZM1023.47 57.74C1022.3 57.74 1021.27 57.42 1020.37 56.78C1019.49 56.1267 1018.81 55.2267 1018.31 54.08C1017.82 52.92 1017.57 51.5733 1017.57 50.04C1017.57 48.5067 1017.82 47.1667 1018.31 46.02C1018.81 44.86 1019.49 43.96 1020.37 43.32C1021.25 42.68 1022.28 42.36 1023.45 42.36C1024.63 42.36 1025.65 42.68 1026.53 43.32C1027.41 43.96 1028.1 44.86 1028.59 46.02C1029.09 47.1667 1029.33 48.5067 1029.33 50.04C1029.33 51.5733 1029.09 52.92 1028.59 54.08C1028.11 55.24 1027.43 56.14 1026.55 56.78C1025.67 57.42 1024.65 57.74 1023.47 57.74ZM1023.47 56.24C1024.33 56.24 1025.07 55.98 1025.71 55.46C1026.35 54.94 1026.85 54.22 1027.21 53.3C1027.57 52.3667 1027.75 51.28 1027.75 50.04C1027.75 48.8 1027.57 47.72 1027.21 46.8C1026.85 45.8667 1026.35 45.1467 1025.71 44.64C1025.07 44.12 1024.32 43.86 1023.45 43.86C1022.6 43.86 1021.85 44.12 1021.21 44.64C1020.57 45.1467 1020.07 45.8667 1019.71 46.8C1019.35 47.72 1019.17 48.8 1019.17 50.04C1019.17 51.2667 1019.35 52.3467 1019.71 53.28C1020.07 54.2133 1020.57 54.94 1021.21 55.46C1021.87 55.98 1022.62 56.24 1023.47 56.24ZM1032.32 57.5V46.78H1033.82V48.82L1033.58 48.52C1033.87 47.8933 1034.31 47.4067 1034.88 47.06C1035.47 46.7133 1036.11 46.54 1036.8 46.54C1037.63 46.54 1038.37 46.7733 1039.04 47.24C1039.71 47.7067 1040.18 48.3133 1040.46 49.06L1040.04 49.08C1040.31 48.2533 1040.77 47.6267 1041.42 47.2C1042.09 46.76 1042.82 46.54 1043.62 46.54C1044.34 46.54 1045 46.7133 1045.6 47.06C1046.21 47.4067 1046.7 47.8867 1047.06 48.5C1047.43 49.1 1047.62 49.78 1047.62 50.54V57.5H1046.12V51.12C1046.12 50.4667 1046 49.9133 1045.76 49.46C1045.53 49.0067 1045.22 48.66 1044.82 48.42C1044.42 48.1667 1043.96 48.04 1043.44 48.04C1042.93 48.04 1042.47 48.1667 1042.06 48.42C1041.65 48.66 1041.32 49.0133 1041.08 49.48C1040.84 49.9333 1040.72 50.48 1040.72 51.12V57.5H1039.22V51.12C1039.22 50.4667 1039.1 49.9133 1038.86 49.46C1038.63 49.0067 1038.32 48.66 1037.92 48.42C1037.52 48.1667 1037.06 48.04 1036.54 48.04C1036.02 48.04 1035.55 48.1667 1035.14 48.42C1034.74 48.66 1034.42 49.0133 1034.18 49.48C1033.94 49.9333 1033.82 50.48 1033.82 51.12V57.5H1032.32Z"
        fill="#EDEDEF"
      />
      <path d="M1109 1V79" stroke="#E1E1FE" strokeOpacity="0.15" />
      <path
        d="M1170.16 31.5V21.07H1173.84C1174.53 21.07 1175.14 21.2007 1175.66 21.462C1176.19 21.7233 1176.59 22.0967 1176.88 22.582C1177.18 23.0673 1177.33 23.6367 1177.33 24.29C1177.33 25.0273 1177.14 25.6527 1176.77 26.166C1176.4 26.6793 1175.89 27.048 1175.26 27.272L1177.68 31.5H1176.08L1173.54 26.978L1174.45 27.51H1171.53V31.5H1170.16ZM1171.53 26.25H1173.89C1174.3 26.25 1174.66 26.1707 1174.96 26.012C1175.27 25.8533 1175.51 25.6247 1175.68 25.326C1175.86 25.0273 1175.94 24.682 1175.94 24.29C1175.94 23.8887 1175.86 23.5433 1175.68 23.254C1175.51 22.9553 1175.27 22.7267 1174.96 22.568C1174.66 22.4093 1174.3 22.33 1173.89 22.33H1171.53V26.25ZM1179.52 31.5V21.07H1186.31V22.33H1180.89V25.634H1186.03V26.894H1180.89V30.24H1186.31V31.5H1179.52ZM1188.29 31.5V21.07H1189.66V30.24H1194.24V31.5H1188.29ZM1196.06 31.5V21.07H1202.85V22.33H1197.43V25.634H1202.57V26.894H1197.43V30.24H1202.85V31.5H1196.06ZM1203.82 31.5L1207.56 21.07H1209.19L1212.92 31.5H1211.45L1210.6 29.05H1206.15L1205.29 31.5H1203.82ZM1206.58 27.79H1210.17L1208.18 22.064H1208.57L1206.58 27.79ZM1217.97 31.668C1217.3 31.668 1216.7 31.5467 1216.15 31.304C1215.6 31.052 1215.13 30.7113 1214.75 30.282C1214.36 29.8527 1214.09 29.372 1213.92 28.84L1215.11 28.35C1215.36 29.022 1215.74 29.54 1216.23 29.904C1216.73 30.2587 1217.32 30.436 1217.99 30.436C1218.4 30.436 1218.76 30.3707 1219.07 30.24C1219.38 30.1093 1219.62 29.9273 1219.79 29.694C1219.96 29.4513 1220.05 29.1713 1220.05 28.854C1220.05 28.4153 1219.93 28.07 1219.67 27.818C1219.43 27.5567 1219.07 27.3607 1218.6 27.23L1216.68 26.642C1215.92 26.4087 1215.34 26.04 1214.94 25.536C1214.54 25.032 1214.34 24.4533 1214.34 23.8C1214.34 23.2307 1214.48 22.7313 1214.75 22.302C1215.03 21.8633 1215.41 21.5227 1215.89 21.28C1216.39 21.028 1216.95 20.902 1217.57 20.902C1218.2 20.902 1218.76 21.014 1219.27 21.238C1219.78 21.462 1220.22 21.7653 1220.57 22.148C1220.92 22.5213 1221.19 22.9507 1221.35 23.436L1220.18 23.926C1219.95 23.338 1219.62 22.8947 1219.17 22.596C1218.72 22.288 1218.19 22.134 1217.59 22.134C1217.21 22.134 1216.88 22.1993 1216.59 22.33C1216.31 22.4513 1216.09 22.6333 1215.94 22.876C1215.79 23.1093 1215.71 23.3893 1215.71 23.716C1215.71 24.0987 1215.83 24.4393 1216.08 24.738C1216.32 25.0367 1216.69 25.2653 1217.18 25.424L1218.93 25.942C1219.75 26.194 1220.37 26.5533 1220.79 27.02C1221.21 27.4867 1221.42 28.0653 1221.42 28.756C1221.42 29.3253 1221.27 29.8293 1220.98 30.268C1220.69 30.7067 1220.28 31.052 1219.76 31.304C1219.24 31.5467 1218.65 31.668 1217.97 31.668ZM1223.71 31.5V21.07H1230.5V22.33H1225.09V25.634H1230.22V26.894H1225.09V30.24H1230.5V31.5H1223.71ZM1232.48 31.5V21.07H1235.9C1236.95 21.07 1237.87 21.2847 1238.66 21.714C1239.44 22.1433 1240.05 22.75 1240.48 23.534C1240.91 24.3087 1241.12 25.2233 1241.12 26.278C1241.12 27.3233 1240.91 28.238 1240.48 29.022C1240.05 29.806 1239.44 30.4173 1238.66 30.856C1237.87 31.2853 1236.95 31.5 1235.9 31.5H1232.48ZM1233.86 30.24H1235.91C1236.69 30.24 1237.36 30.0767 1237.92 29.75C1238.48 29.4233 1238.92 28.966 1239.23 28.378C1239.54 27.7807 1239.69 27.0807 1239.69 26.278C1239.69 25.466 1239.53 24.766 1239.22 24.178C1238.91 23.59 1238.47 23.1373 1237.9 22.82C1237.34 22.4933 1236.68 22.33 1235.91 22.33H1233.86V30.24Z"
        fill="#A09FA6"
      />
      <path
        d="M1170.16 57.5V56.5L1174.32 51.92C1175.13 51.0267 1175.79 50.2867 1176.3 49.7C1176.82 49.1133 1177.21 48.58 1177.46 48.1C1177.71 47.62 1177.84 47.1 1177.84 46.54C1177.84 45.6467 1177.58 44.96 1177.06 44.48C1176.54 44 1175.85 43.76 1174.98 43.76C1174.09 43.76 1173.33 44.0133 1172.72 44.52C1172.12 45.0267 1171.71 45.7333 1171.5 46.64L1170.04 46.32C1170.21 45.5067 1170.53 44.8067 1170.98 44.22C1171.43 43.6333 1172 43.18 1172.68 42.86C1173.36 42.5267 1174.12 42.36 1174.96 42.36C1175.85 42.36 1176.63 42.54 1177.3 42.9C1177.97 43.26 1178.49 43.7533 1178.86 44.38C1179.25 45.0067 1179.44 45.7267 1179.44 46.54C1179.44 47.1 1179.32 47.64 1179.08 48.16C1178.85 48.68 1178.51 49.24 1178.04 49.84C1177.57 50.44 1176.97 51.14 1176.24 51.94L1172.46 56.1H1179.84V57.5H1170.16ZM1188.33 57.74C1187.16 57.74 1186.13 57.42 1185.23 56.78C1184.35 56.1267 1183.67 55.2267 1183.17 54.08C1182.68 52.92 1182.43 51.5733 1182.43 50.04C1182.43 48.5067 1182.68 47.1667 1183.17 46.02C1183.67 44.86 1184.35 43.96 1185.23 43.32C1186.11 42.68 1187.14 42.36 1188.31 42.36C1189.49 42.36 1190.51 42.68 1191.39 43.32C1192.27 43.96 1192.96 44.86 1193.45 46.02C1193.95 47.1667 1194.19 48.5067 1194.19 50.04C1194.19 51.5733 1193.95 52.92 1193.45 54.08C1192.97 55.24 1192.29 56.14 1191.41 56.78C1190.53 57.42 1189.51 57.74 1188.33 57.74ZM1188.33 56.24C1189.19 56.24 1189.93 55.98 1190.57 55.46C1191.21 54.94 1191.71 54.22 1192.07 53.3C1192.43 52.3667 1192.61 51.28 1192.61 50.04C1192.61 48.8 1192.43 47.72 1192.07 46.8C1191.71 45.8667 1191.21 45.1467 1190.57 44.64C1189.93 44.12 1189.18 43.86 1188.31 43.86C1187.46 43.86 1186.71 44.12 1186.07 44.64C1185.43 45.1467 1184.93 45.8667 1184.57 46.8C1184.21 47.72 1184.03 48.8 1184.03 50.04C1184.03 51.2667 1184.21 52.3467 1184.57 53.28C1184.93 54.2133 1185.43 54.94 1186.07 55.46C1186.73 55.98 1187.48 56.24 1188.33 56.24ZM1196.8 57.5V56.5L1200.96 51.92C1201.77 51.0267 1202.43 50.2867 1202.94 49.7C1203.46 49.1133 1203.85 48.58 1204.1 48.1C1204.35 47.62 1204.48 47.1 1204.48 46.54C1204.48 45.6467 1204.22 44.96 1203.7 44.48C1203.18 44 1202.49 43.76 1201.62 43.76C1200.73 43.76 1199.97 44.0133 1199.36 44.52C1198.76 45.0267 1198.35 45.7333 1198.14 46.64L1196.68 46.32C1196.85 45.5067 1197.17 44.8067 1197.62 44.22C1198.07 43.6333 1198.64 43.18 1199.32 42.86C1200 42.5267 1200.76 42.36 1201.6 42.36C1202.49 42.36 1203.27 42.54 1203.94 42.9C1204.61 43.26 1205.13 43.7533 1205.5 44.38C1205.89 45.0067 1206.08 45.7267 1206.08 46.54C1206.08 47.1 1205.96 47.64 1205.72 48.16C1205.49 48.68 1205.15 49.24 1204.68 49.84C1204.21 50.44 1203.61 51.14 1202.88 51.94L1199.1 56.1H1206.48V57.5H1196.8ZM1215.94 57.5V53.98H1208.36V52.68L1215.94 42.6H1217.34V52.68H1219.16V53.98H1217.34V57.5H1215.94ZM1209.58 53.26L1209.4 52.68H1215.94V43.98L1216.44 44.12L1209.58 53.26Z"
        fill="#EDEDEF"
      />
      <path d="M1302 1V79" stroke="#E1E1FE" strokeOpacity="0.15" />
      <path
        d="M1362.15 31.5L1365.89 21.07H1367.52L1371.25 31.5H1369.78L1368.93 29.05H1364.48L1363.62 31.5H1362.15ZM1364.91 27.79H1368.5L1366.51 22.064H1366.9L1364.91 27.79ZM1372.85 31.5V21.07H1376.26C1377.32 21.07 1378.24 21.2847 1379.02 21.714C1379.81 22.1433 1380.41 22.75 1380.84 23.534C1381.27 24.3087 1381.49 25.2233 1381.49 26.278C1381.49 27.3233 1381.27 28.238 1380.84 29.022C1380.41 29.806 1379.81 30.4173 1379.02 30.856C1378.24 31.2853 1377.32 31.5 1376.26 31.5H1372.85ZM1374.22 30.24H1376.28C1377.05 30.24 1377.72 30.0767 1378.28 29.75C1378.85 29.4233 1379.29 28.966 1379.6 28.378C1379.9 27.7807 1380.06 27.0807 1380.06 26.278C1380.06 25.466 1379.9 24.766 1379.58 24.178C1379.27 23.59 1378.84 23.1373 1378.27 22.82C1377.71 22.4933 1377.04 22.33 1376.28 22.33H1374.22V30.24ZM1383.51 31.5V21.07H1384.77L1388.67 26.628H1388.03L1391.91 21.07H1393.17V31.5H1391.78V22.806L1392.27 22.96L1388.39 28.42H1388.28L1384.44 22.96L1384.88 22.806V31.5H1383.51ZM1395.76 31.5V21.07H1397.13V31.5H1395.76ZM1401.55 31.5V22.33H1398.73V21.07H1405.73V22.33H1402.94V31.5H1401.55Z"
        fill="#A09FA6"
      />
      <path
        d="M1370.78 57.74C1369.74 57.74 1368.77 57.5533 1367.86 57.18C1366.97 56.7933 1366.18 56.26 1365.5 55.58C1364.82 54.8867 1364.29 54.0733 1363.9 53.14C1363.51 52.1933 1363.32 51.16 1363.32 50.04C1363.32 48.92 1363.51 47.8933 1363.9 46.96C1364.29 46.0133 1364.82 45.2 1365.5 44.52C1366.18 43.8267 1366.97 43.2933 1367.86 42.92C1368.77 42.5467 1369.74 42.36 1370.78 42.36C1371.82 42.36 1372.79 42.5533 1373.68 42.94C1374.59 43.3133 1375.38 43.8467 1376.06 44.54C1376.74 45.22 1377.27 46.0267 1377.66 46.96C1378.05 47.8933 1378.24 48.92 1378.24 50.04C1378.24 51.16 1378.05 52.1933 1377.66 53.14C1377.27 54.0733 1376.74 54.8867 1376.06 55.58C1375.38 56.26 1374.59 56.7933 1373.68 57.18C1372.79 57.5533 1371.82 57.74 1370.78 57.74ZM1370.78 56.24C1371.65 56.24 1372.43 56.08 1373.14 55.76C1373.86 55.44 1374.48 54.9933 1375 54.42C1375.52 53.8467 1375.92 53.1867 1376.2 52.44C1376.49 51.6933 1376.64 50.8933 1376.64 50.04C1376.64 49.2 1376.49 48.4067 1376.2 47.66C1375.92 46.9133 1375.52 46.2533 1375 45.68C1374.48 45.1067 1373.86 44.66 1373.14 44.34C1372.43 44.02 1371.65 43.86 1370.78 43.86C1369.91 43.86 1369.12 44.02 1368.4 44.34C1367.69 44.66 1367.08 45.1067 1366.56 45.68C1366.04 46.2533 1365.63 46.9133 1365.34 47.66C1365.06 48.4067 1364.92 49.2 1364.92 50.04C1364.92 50.8933 1365.06 51.6933 1365.34 52.44C1365.63 53.1867 1366.04 53.8467 1366.56 54.42C1367.08 54.9933 1367.7 55.44 1368.42 55.76C1369.14 56.08 1369.93 56.24 1370.78 56.24ZM1381.1 57.5V46.78H1382.6V48.86L1382.26 48.78C1382.53 48.0867 1382.96 47.54 1383.56 47.14C1384.17 46.74 1384.88 46.54 1385.68 46.54C1386.44 46.54 1387.12 46.7133 1387.72 47.06C1388.33 47.4067 1388.81 47.8867 1389.16 48.5C1389.52 49.1 1389.7 49.78 1389.7 50.54V57.5H1388.2V51.12C1388.2 50.4667 1388.08 49.9133 1387.84 49.46C1387.61 49.0067 1387.29 48.66 1386.86 48.42C1386.45 48.1667 1385.97 48.04 1385.42 48.04C1384.87 48.04 1384.39 48.1667 1383.96 48.42C1383.53 48.66 1383.2 49.0133 1382.96 49.48C1382.72 49.9333 1382.6 50.48 1382.6 51.12V57.5H1381.1ZM1397.44 57.74C1396.44 57.74 1395.54 57.5 1394.72 57.02C1393.92 56.5267 1393.29 55.8533 1392.82 55C1392.36 54.1467 1392.12 53.18 1392.12 52.1C1392.12 51.02 1392.35 50.0667 1392.8 49.24C1393.26 48.4 1393.87 47.74 1394.64 47.26C1395.43 46.78 1396.31 46.54 1397.28 46.54C1398.06 46.54 1398.74 46.6867 1399.34 46.98C1399.96 47.26 1400.48 47.6467 1400.9 48.14C1401.33 48.62 1401.66 49.1667 1401.88 49.78C1402.11 50.38 1402.22 51 1402.22 51.64C1402.22 51.7733 1402.22 51.9267 1402.2 52.1C1402.19 52.26 1402.17 52.4267 1402.14 52.6H1393.08V51.2H1401.28L1400.56 51.8C1400.68 51.0667 1400.6 50.4133 1400.3 49.84C1400.02 49.2533 1399.62 48.7933 1399.08 48.46C1398.55 48.1133 1397.95 47.94 1397.28 47.94C1396.62 47.94 1396 48.1133 1395.42 48.46C1394.86 48.8067 1394.42 49.2933 1394.1 49.92C1393.78 50.5333 1393.66 51.2667 1393.72 52.12C1393.66 52.9733 1393.79 53.72 1394.12 54.36C1394.47 54.9867 1394.94 55.4733 1395.52 55.82C1396.12 56.1667 1396.76 56.34 1397.44 56.34C1398.23 56.34 1398.89 56.1533 1399.42 55.78C1399.96 55.4067 1400.39 54.94 1400.72 54.38L1402 55.06C1401.79 55.54 1401.46 55.9867 1401.02 56.4C1400.58 56.8 1400.06 57.1267 1399.44 57.38C1398.84 57.62 1398.18 57.74 1397.44 57.74Z"
        fill="#EDEDEF"
      />
    </svg>
  );
};

export const HighlightedMessageFooter: React.FC<
  ComponentProps<"svg"> & { message: string }
> = ({ message, ...props }) => {
  return (
    <svg
      viewBox="0 0 1920 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_17_32126)">
        <rect width="1920" height="80" fill="#161618" />
        <g clipPath="url(#clip1_17_32126)">
          <rect x="1082" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1242" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1402" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1562" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1722" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1882" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1082" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1242" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1402" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1562" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1722" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1882" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1082" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1242" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1402" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1562" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1722" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1882" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1082" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1242" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1402" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1562" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1722" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1882" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1102" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1262" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1422" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1582" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1742" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1902" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1102" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1262" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1422" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1582" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1742" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1902" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1102" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1262" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1422" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1582" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1742" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1902" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1102" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1262" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1422" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1582" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1742" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1902" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1122" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1282" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1442" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1602" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1762" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1122" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1282" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1442" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1602" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1762" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1122" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1282" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1442" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1602" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1762" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1122" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1282" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1442" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1602" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1762" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1142" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1302" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1462" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1622" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1782" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1142" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1302" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1462" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1622" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1782" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1142" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1302" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1462" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1622" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1782" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1142" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1302" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1462" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1622" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1782" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1162" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1322" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1482" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1642" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1802" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1162" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1322" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1482" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1642" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1802" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1162" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1322" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1482" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1642" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1802" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1162" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1322" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1482" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1642" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1802" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1182" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1342" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1502" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1662" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1822" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1182" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1342" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1502" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1662" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1822" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1182" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1342" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1502" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1662" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1822" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1182" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1342" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1502" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1662" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1822" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1202" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1362" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1522" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1682" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1842" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1202" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1362" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1522" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1682" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1842" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1202" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1362" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1522" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1682" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1842" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1202" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1362" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1522" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1682" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1842" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1222" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1382" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1542" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1702" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1862" y="9" width="2" height="2" fill="#25D0AB" />
          <rect x="1222" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1382" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1542" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1702" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1862" y="29" width="2" height="2" fill="#25D0AB" />
          <rect x="1222" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1382" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1542" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1702" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1862" y="49" width="2" height="2" fill="#25D0AB" />
          <rect x="1222" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1382" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1542" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1702" y="69" width="2" height="2" fill="#25D0AB" />
          <rect x="1862" y="69" width="2" height="2" fill="#25D0AB" />
        </g>
        <rect
          width="1051"
          height="80"
          transform="matrix(-1 0 0 1 2124 0)"
          fill="url(#paint0_linear_17_32126)"
        />
        <mask
          id="mask0_17_32126"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="40"
          y="23"
          width="1200"
          height="33"
        >
          <rect
            x="40"
            y="23"
            width="1200"
            height="33"
            fill="url(#paint1_linear_17_32126)"
          />
        </mask>
        <g mask="url(#mask0_17_32126)">
          <text
            fill="#EDEDEF"
            xmlSpace="preserve"
            className="whitespace-pre font-digital text-2xl tracking-[0.02em]"
          >
            <tspan x="38" y="47.6364">
              {message}
              <tspan fill="#E1E1FE" fillOpacity="0.15">
                {"8".repeat(120 - message.length)}
              </tspan>
            </tspan>
          </text>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_17_32126"
          x1="1051"
          y1="39.9998"
          x2="344.64"
          y2="39.9998"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.166667" stopColor="#161618" />
          <stop offset="1" stopColor="#161618" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_17_32126"
          x1="40"
          y1="40"
          x2="1240"
          y2="39.9991"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.6875" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_17_32126">
          <rect width="1920" height="80" fill="white" />
        </clipPath>
        <clipPath id="clip1_17_32126">
          <rect
            width="1049"
            height="80"
            fill="white"
            transform="translate(1073)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
