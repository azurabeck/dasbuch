// src/utils/date-utils.js

/**
 * Formata um timestamp para diferentes formatos de data e hora.
 *
 * @param {string} timestamp - O timestamp a ser formatado (ISO 8601).
 * @param {string} formatType - O tipo de formatação desejado: 'date', 'time' ou 'datetime'.
 * @returns {string} A string formatada.
 */
export function formatTimestamp(timestamp, formatType = 'datetime') {
  if (!timestamp) {
    return ''; // Ou você pode retornar algum valor padrão, como '-'
  }

  const date = new Date(timestamp);

  switch (formatType) {
    case 'date':
      return date.toLocaleDateString('pt-BR');
    case 'time':
      return date.toLocaleTimeString('pt-BR');
    case 'datetime':
      return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR');
    default:
      return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR'); // Padrão para datetime
  }
}
