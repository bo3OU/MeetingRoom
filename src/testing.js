const obj = require("./credentials");
let a = "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" + obj.obj.client_id + "&redirect_uri=http%3A%2F%2Fmeetingrooms.tk%3A3000%2Froomlist&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.settings.readonly&access_type=offline&approvalPrompt=force"
console.log(obj)
