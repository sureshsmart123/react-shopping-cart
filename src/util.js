export default function formatCurrency(num)
{
 return "$" + Number(parseFloat(num).toFixed(1)).toLocaleString() + " ";
}
//num = parseFloat(num).toFixed(decimalplaces);
//return "$" + Number(num.toFixed(1)).toLocaleString() + " ";