let r = new XMLHttpRequest();

r.onload = function () {
  if (r.readyState === 4) {
    if (r.status === 200) {
      console.log("data ready");
      let data = JSON.parse(r.responseText);
      let users = [data];

      console.log(users);

      let main = document.querySelector("main");

      users.map((us) => {
        main.innerHTML += `
          <div>
            <li>
              <div>
              <h2>${us.author}</h2>
              <p><span>${us.quote}</span></p>
              </div>
              <button class="copy" onclick="copyText('${us.quote}')"><i class="fa-regular fa-copy"></i></button>
            </li>
          </div>
        `;
      });
    } else {
      console.log("problem");
    }
  } else {
    console.log("error");
  }
};

function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => alert("تم نسخ النص!"))
    .catch(err => console.error("فشل في النسخ: ", err));
}

let number = Math.ceil(Math.random() * 1200);

r.open("GET", `https://dummyjson.com/quotes/${number}`, true);
r.send();
