var userInput = document.querySelectorAll(".userInput");
var sendBtn = document.querySelector(".sendBtn > i");
var cahtList = document.querySelector(".chatList");
var loadingImg = document.querySelector(".loadingImg");
urduGreetings = [
  "assalam o alaikum",
  "salam",
  "asalam o alikum",
  "asalam o alaikum",
  "aslam o alikum",
  "assalamu alaikum",
  "salaam",
  "salaam alaikum",
  "assalamualaikum",
  "salamoona",
  "assalamo alaikum",
  "as-salaam alaikum",
  "salam alaikum",
];

roman_urdu_greetings = [];

roman_urdu_replies = [];

print(roman_urdu_greetings);
print(roman_urdu_replies);

greetings = [
  "or sunao",
  "kya hal hai",
  "kese mijaz hen",
  "aadaab",
  "kya haal hai",
  "kese ho",
  "kaise ho",
  "kya haal chal",
  "kya chal raha hai",
  "kya ho raha hai",
  "kya haal hain",
  "sab theek",
];

replyGreetings = [
  "men bhi theak hun",
  "mast",
  "behtareen",
  "boht acha",
  "fi fat",
  "Mein theek hun, tumhare kya haal hain?",
  "Mein theek hun, tum kaise ho?",
  "Mein theek hun, tum kaise ho?",
  "Sab theek chal raha hai, tumhare kya haal hain?",
  "Sab theek chal raha hai, tumhare kya haal hain?",
  "Kuch khaas nahi, tumhare kya ho raha hai?",
  "Mein theek hun, tumhare kya haal hain?",
  "Haan, sab theek hai. Tumhare kya haal hain?",
];
englishGreetings = [
  "hello",
  "hi",
  "hey",
  "greetings",
  "good morning",
  "good afternoon",
  "good evening",
  "hi there",
  "hey there",
  "howdy",
  "what's up",
  "sup",
  "hiya",
  "good day",
  "salutations",
  "as-salamu alaykum",
  "hello there",
  "hey buddy",
  "yo",
  "hey man",
  "hey dude",
  "how are you",
  "how are you doing",
  "how do you do",
  "what's going on",
  "hello everyone",
  "hi everyone",
  "hey everyone",
  "good to see you",
  "hello friend",
  "hey friend",
  "hi friend",
  "salamu alaikum",
  "how's it going",
  "how's everything",
  "what's new",
];

admissionProcess = [
  "admission ka process kya hai",
  "admission kaise karna hai",
  "admission lene ke liye kya karna hoga",
  "mene admission lena hai",
  "mene smit men admission lena hai",
  "mene it men admission lena hai",
  "mene smit k courses men admission lena hai",
  "mene smit k it courses men admission lena hai",
  "mujhe admission lena hai",
  "mujhe smit men admission lena hai",
  "mujhe it men admission lena hai",
  "mujhe smit k courses men admission lena hai",
  "mujhe smit k it courses men admission lena hai",
  "mujhe admission chahie",
  "mujhe dakhila chahie",

  "admission ke liye requirements kya hain",
  "admission ke liye documents kya chahiye",
];

admissionFees = [
  "admission fees kitni hai",
  "admission ki fees kitni hai",
  "admission ki kya fees hai",
  "kya admission ki koi fees bhi hai",
];

admissionForm = [
  "admission form kahan milega",
  "admission form kaise fill karna hai",
];

admissionDate = [
  "admission kab open hain",
  "admissions kab shuru hain",
  "admission kab se start hain",
  "admission ka last date kya hai",
];

function sendMessage(e) {
  var value = event.target.value;
  if (event.keyCode == 13) {
    if (urduGreetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBox">Walikum Asslama! Kaise ho? Mein SMIT ChatBox hun or SMIT men addmission lene k hawale se apki kya madad kr skta hun.</li>`;
      }, 2000);
    } else if (englishGreetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBox">hello! Kaise ho? Mein SMIT ChatBox hun or SMIT men addmission lene k hawale se apki kya madad kr skta hun.</li>`;
      }, 2000);
    } else if (greetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBox">Men theak hun zabardast. ap kese ho?</li>`;
      }, 2000);
    } else if (replyGreetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBox">Allah apke lye asani kre or hamesha khush rakhe. Ameen!</li>`;
      }, 2000);
    } else if (admissionProcess.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBox">admission ka process ye hai k apko SMIT k official FaceBook page per update rehna hoga jab SMIT k FaceBook page per ya website per apko courses open hone k bare men koi update mile to ap online hi SMIT ki website per admission form fill krenge phr apko chand din baad test k hawale se update mil jaengi phr ap age ka process follow krte jaeiga.</li>`;
      }, 2000);
    } else if (admissionFees.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBox">admission ki fees k bare men apko admission k waqt bta diya jaega zyada nhi hoti bas 500 ya 1000 hogi.</li>`;
      }, 2000);
    }
    event.target.value = "";
  }
}
