import * as moment from "moment";

export const INITIAL_VIEWPORT = {
  latitude: 48.75,
  longitude: 31,
  zoom: 5.25,
  minZoom: 5,
  maxZoom: 7,
  bearing: 0,
  pitch: 0,
};

export const TOKEN = 'pk.eyJ1Ijoib2xlc3lhbGFkYW5heSIsImEiOiJja2dnOWRuM3gxb3kwMnJxYWw0c3U2ZGk1In0.jPqsbaxY_7SLdZ1FY_G0RQ';

export const TODAY = () => moment().format("YYYY-MM-DD");
