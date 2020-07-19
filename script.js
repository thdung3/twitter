let tweetArea = document.getElementById("tweetArea");
let num = 1;
let tweetList = [{
  id: 1,
  user: "blondebombshell",
  pic: "/img/ma2.jpg",
  handle: "marilyn_monroe",
  contents: "Give a girl the right pair of shoes and she'll conquer the world.",
  hasRetweet: false,
  isDirectRT: false,
  parentTweetID: "",
  comments: 0,
  retweets: 260,
  retweeted: false,
  likes: 5,
  liked: false,
  postTime: new Date(2020, 4, 24, 23, 05, 30),
}, {
  id: 0,
  user: "fatherofcomedy",
  pic: "/img/cha.jpg",
  handle: "charlie_chaplin",
  contents: "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
  hasRetweet: false,
  isDirectRT: false,
  parentTweetID: "",
  comments: 0,
  retweets: 258,
  retweeted: false,
  likes: 153,
  liked: false,
  postTime: new Date(2020, 4, 22, 22, 33, 30),
},];

//----------------------------------------------------Bitna
let MAX_CHAR = 140;
let tweetContents = document.getElementById("tweetArea");
const countLetter = () => {
  //1. know how many letter inside of textarea
  let numOfText = tweetContents.value.length;
  //2. remain = Max_char - 1.
  let remain = MAX_CHAR - numOfText;
  //2-1. if remain is negative number, change text to red
  if (remain < 0) {
    document.getElementById("remainArea").style.color = "red";
  } else {
    document.getElementById("remainArea").style.color = "black";
  }
  //3. show remian text
  document.getElementById("remainArea").innerHTML = remain;
};
tweetContents.addEventListener("input", countLetter);
//---------------------------------------------------------Bitna

//init
// document.getElementById("uploadButton").disabled = true;
document.getElementById("uploadButton").innerText = "Story Fire";


const tweetFire = () => {
  console.log('*----- tweetFire -----*')
  console.log('Tweet content:', document.getElementById("tweetArea").value)
  num++;
  let tweet = {
    id: num,
    user: 'jamesdean',
    pic: '/img/ja.jpg',
    handle: 'dreamforever',
    contents: document.getElementById("tweetArea").value,
    hasRetweet: false,
    isDirectRT: false,
    parentTweetID: "",
    comments: 0,
    retweets: 0,
    retweeted: false,
    likes: 0,
    liked: false,
    removed: false,
  };
  console.log('tweet:', tweet)
  tweetList.unshift(tweet);
  document.getElementById("tweetArea").value = ""
  MAX_CHAR = 140
  document.getElementById("remainArea").innerHTML = MAX_CHAR;
  render(tweetList);
};


const render = (list) => {
  let html = list.map(item => {
    return `<div class="row pb-3 ">
      <div class="col-sm-2 list-area">
          <div class="list-user-icon">
              <img src="/img/ma.jpg">
          </div>
      </div>
      <div class="col-sm-10 tweetbox-message-content">
          <div>
          ${item.user}<a href="#"> @${item.handle}</a>
          </div>
          <br>
          <div>
          ${item.contents}
              <div class="retweet">
                  <div class="retweet-icon">
                      <img src="${item.pic}"> artsyworld<a href="#"> @manolo_blahnik</a>
                  </div>
                  ${item.contents}
              </div>
          </div>
          <div class="list-toolbar-icon">
              <button type="button" class="btn btn-link"><i class="far fa-star">${item.likes}</i></button>
              <button type="button" class="btn btn-link"><i class="far fa-comment">${item.comments}</i></button>
              <button type="button" class="btn btn-link"><i class="fas fa-retweet">${item.retweets}</i></button>
              <button type="button" class="btn btn-link"><i class="fas fa-upload"></i></button>
              <button type="button" class="btn btn-link"><i class="far fa-trash-alt"
                      onclick="remove(${item.id})"></i></button>
          </div>
      </div>

  </div>`

    //     return `<div class="row pb-3 ">
    //     <div class="col-sm-2 list-area">
    //     <div class="list-user-icon">
    //         <img src="${item.pic}">
    //     </div>
    //     </div>
    //     <div class="col-sm-10 tweetbox-message-content">
    //         <div>
    //         ${item.user}<a href="#"> @${item.handle}</a>
    //         </div>
    //         <br>
    //             <div>
    //         ${item.contents}
    //             </div>
    //             <div class="list-toolbar-icon">
    //                 <button type="button" class="btn btn-link"><i class="far fa-star">${item.likes}</i></button>
    //                 <button type="button" class="btn btn-link"><i class="far fa-comment">${item.comments}</i></button>
    //               <button type="button" class="btn btn-link"><i class="fas fa-retweet">${item.retweets}</i></button>
    //             <button type="button" class="btn btn-link"><i class="fas fa-upload"></i></button>
    //             <button type="button" class="btn btn-link"><i class="far fa-trash-alt" onclick="remove(${item.id})></i></button>
    //           </div>
    //       </div>
    //     </div>
    // </div>`
  }).join('')
  document.getElementById('tweetListArea').innerHTML = html
  MAX_CHAR = 140;
}

const remove = (tweetId) => {
  console.log('tweetId:', tweetId)
  let index = 0;
  for (let i = 0; i < tweetList.length; i++) {
    if (tweetList[i].id == tweetId)
      index = i
  }
  console.log('index;', index)
  tweetList.splice(index, 1)
  // console.log(tweetList)
  render(tweetList)
}

// render(tweetList)