import Vue from "vue";

Vue.filter("truncate", (text, length = 400, suffix = "...") => {
  if (!text) return "";

  if (text.length <= length) return text;

  return text.substring(0, length) + suffix;
});
