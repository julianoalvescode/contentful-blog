import { formatDistanceToNow, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function humanizeDate(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: ptBR });
}

export function formatDate(date: string) {
  return format(new Date(date), "dd/MM/yyyy", { locale: ptBR });
}
