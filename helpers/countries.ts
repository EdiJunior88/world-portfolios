import type Country from "@/interfaces/country.interface";
import { bjData } from "@/data/bjData";
import { brData } from "@/data/brData";
import { cdData } from "@/data/cdData";
import { ciData } from "@/data/ciData";
import { cmData } from "@/data/cmData";
import { frData } from "@/data/frData";
import { gaData } from "@/data/gaData";
import { idData } from "@/data/idData";
import { inData } from "@/data/inData";
import { krData } from "@/data/krData";
import { snData } from "@/data/snData";
import { gnData } from "@/data/gnData";
import { tgData } from "@/data/tgData";
import { usData } from "@/data/usData";
import { mmData } from "@/data/mmData";
import { keData } from "@/data/keData";
import { cgData } from "@/data/cgData";
import { trData } from "@/data/trData";
import { aoData } from "@/data/aoData";
import { caData } from "@/data/caData";
import { htData } from "@/data/htData";
import { pkData } from "@/data/pkData";
import { ngData } from "@/data/ngData";

const countries: Country[] = [
  {
    name: "Cameroun",
    code: "cm",
    numberCode: "237",
    flag: "/assets/images/cm/flag.png",
    portfolios: cmData,
  },
  {
    name: "Togo",
    code: "tg",
    numberCode: "228",
    flag: "/assets/images/tg/flag.png",
    portfolios: tgData,
  },
  {
    name: "Benin",
    code: "bj",
    numberCode: "229",
    flag: "/assets/images/bj/flag.png",
    portfolios: bjData,
  },
  {
    name: "Senegal",
    code: "sn",
    numberCode: "221",
    flag: "/assets/images/sn/flag.png",
    portfolios: snData,
  },
  {
    name: "Guinea",
    code: "gn",
    numberCode: "224",
    flag: "/assets/images/gn/flag.png",
    portfolios: gnData,
  },
  {
    name: "Côte d'Ivoire",
    code: "ci",
    numberCode: "225",
    flag: "/assets/images/ci/flag.png",
    portfolios: ciData,
  },
  {
    name: "France",
    code: "fr",
    numberCode: "33",
    flag: "/assets/images/fr/flag.png",
    portfolios: frData,
  },
  {
    name: "South Korea",
    code: "kr",
    numberCode: "410",
    flag: "/assets/images/kr/flag.png",
    portfolios: krData,
  },
  {
    name: "USA",
    code: "us",
    numberCode: "840",
    flag: "/assets/images/us/flag.png",
    portfolios: usData,
  },
  {
    name: "India",
    code: "in",
    numberCode: "91",
    flag: "/assets/images/in/flag.png",
    portfolios: inData,
  },
  {
    name: "République démocratique du Congo",
    code: "cd",
    numberCode: "243",
    flag: "/assets/images/cd/flag.png",
    portfolios: cdData,
  },
  {
    name: "Indonesia",
    code: "id",
    numberCode: "62",
    flag: "/assets/images/id/flag.png",
    portfolios: idData,
  },
  {
    name: "Brazil",
    code: "br",
    numberCode: "55",
    flag: "/assets/images/br/flag.png",
    portfolios: brData,
  },
  {
    name: "Gabon",
    code: "ga",
    numberCode: "241",
    flag: "/assets/images/ga/flag.png",
    portfolios: gaData,
  },
  {
    name: "Myanmar (Burma)",
    code: "mm",
    numberCode: "95",
    flag: "/assets/images/mm/flag.png",
    portfolios: mmData,
  },
  {
    name: "Kenya",
    code: "ke",
    numberCode: "254",
    flag: "/assets/images/ke/flag.png",
    portfolios: keData,
  },
  {
    name: "Congo-Brazzaville",
    code: "cg",
    numberCode: "242",
    flag: "/assets/images/cg/flag.png",
    portfolios: cgData,
  },
  {
    name: "Türkiye",
    code: "tr",
    numberCode: "90",
    flag: "/assets/images/tr/flag.png",
    portfolios: trData,
  },
  {
    name: "Angola",
    code: "ao",
    numberCode: "244",
    flag: "/assets/images/ao/flag.png",
    portfolios: aoData,
  },
  {
    name: "Canada",
    code: "ca",
    numberCode: "514",
    flag: "/assets/images/ca/flag.png",
    portfolios: caData,
  },
  {
    name: "Haiti",
    code: "ht",
    numberCode: "509",
    flag: "/assets/images/ht/flag.png",
    portfolios: htData
  },
  {
    name: "Pakistan",
    code: "pk",
    numberCode: "92",
    flag: "/assets/images/pk/flag.png",
    portfolios: pkData
  },
  {
    name: "Nigeria",
    code: "ng",
    numberCode: "234",
    flag: "/assets/images/ng/flag.png",
    portfolios: ngData
  },
];

export default countries.sort((a, b) => a.name.localeCompare(b.name));
