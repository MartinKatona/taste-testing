import dayjs from "dayjs";

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
