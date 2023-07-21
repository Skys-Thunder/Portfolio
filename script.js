async function gets(){
    var res = await fetch("https://script.google.com/macros/s/AKfycbyOEzub_UX-nEISIiwk2d1oFsBVKw6w5Sqg28g7k_l7_t3nVSeHz_x5PTb0f4pJk0vi/exec?name=Sky_Thunder");
    var res = await res.json(); // rating = res[res.length-1].Rating
    color=["#808080","#804000","#008000","#00c0c0","#0000ff","#c0c000","#ff8000","ff0000"];
    if(res.length==0) document.querySelectorAll(".name")[0].style.color="#000000"
    else document.querySelectorAll(".name")[0].style.color=(Math.floor(Number(res[res.length-1].Rating) / 400) >= 7) ? "#ff0000" : (Number(res[res.length-1].Rating)/400==0)?`#000000`:color[Math.floor(Number(res[res.length-1].Rating) / 400)];
}

gets();

var charts = document.querySelector("#myChart").getContext('2d');
new Chart(charts, {
  type: 'line',
  data: {
    labels: ["7/21","7/22"],
    datasets: [{
      label: "解いた問題数",
      data: [596,0],
      borderColor: '#ff6347',
      backgroundColor: '#ff6347',
    }],
  },
  options: {
    responsive: false,
  }
})
