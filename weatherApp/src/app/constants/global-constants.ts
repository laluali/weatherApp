
export const DATE_API = 'https://api.openweathermap.org/data/2.5/forecast?q=Mumbai,in&appid=1611ad570224abe96deeb4cd293188d5&units=metric';
export const SAMPLE_RESP = 'http://localhost:4200/src/app/constants/sample.json'

export const appHeaders = {
  'ContentTypeJSON': 'application/json'
};

export const monthMap = new Map<string, string>(
  [
    ['01', 'JAN'],
    ['02', 'FEB'],
    ['03', 'MAR'],
    ['04', 'APR'],
    ['05', 'MAY'],
    ['06', 'JUN'],
    ['07', 'JUL'],
    ['08', 'AUG'],
    ['09', 'SEP'],
    ['10', 'OCT'],
    ['11', 'NOV'],
    ['12', 'DEC']
  ]
);
