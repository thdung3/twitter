let tweetArea = document.getElementById("tweetArea");
let num = 1;
let tweetList = [{
  id: 1,
  user: "Jeesun",
  pic: "...",
  handle: "luckymeday",
  contents: "studuying Javascript!",
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
  user: "Christina",
  pic: "...",
  handle: "christina.hohng",
  contents: "Me too!!",
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
    user: 'JeeSun',
    pic: '...',
    handle: '@lee',
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

  render(tweetList);
};
// render()

const render = (list) => {
  let html = list.map(item => {
    return `<div class="row">
    <div class="tweetbox-user-area">
        <div class="tweetbox-user-icon">
        ${item.pic}
        </div>
    </div>
    <div class="col tweetbox-message-content">
        <div class="tweetlist-name">
        ${item.user}<a href="#">${item.handle}</a>
        </div>
        <br>
        <div class="tweetlist-status">
        ${item.contents}
        </div>
        <br>
        <div class="tweetbox-message-toolbar-icon">
            <button type="button" class="btn btn-link"><i class="far fa-star">${item.likes}</i></button>
            <button type="button" class="btn btn-link"><i class="far fa-comment">${item.comments}</i></button>
            <button type="button" class="btn btn-link"><i class="fas fa-retweet">${item.retweets}</i></button>
            <button type="button" class="btn btn-link"><i class="fas fa-upload"></i></button>
            <button type="button" class="btn btn-link"><i class="far fa-trash-alt" onclick="remove(${item.id})"></i></button>
        </div>
    </div>
</div>`
  }).join('')
  document.getElementById('tweetListArea').innerHTML = html
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