import dayjs from "dayjs";

export class ListData {
  name = "";
  item = new ListItem();

  constructor(props?: Partial<ListData>) {
    console.log("props", props);

    this.name = props?.name ?? "-";
    this.item = new ListItem(props?.item);
    console.log("name", this.name, "item", this.item);
  }
}

export default class ListItem {
  type = "";
  flavour = "";
  liquid = 0;
  liquidName = "";
  amount = 0;
  comment = "";
  rating = 0;
  date = dayjs();
  dateDisplay = "2000-01-01";

  constructor(props?: Partial<ListItem>) {
    const data = { ...props };
    data.date = dayjs(props?.date);
    data.dateDisplay = data.date.format("YYYY-MM-DD");
    Object.assign(this, data);
  }
}
