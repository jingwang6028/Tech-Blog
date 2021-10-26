module.exports = {
  format_date: (date) => {
    date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
