import{_ as e}from"./part.Bky-bi4c.js";import{ac as t,ad as s,ae as i,D as a,af as o,z as l}from"./three.BbSu69HM.js";import{G as n,D as r}from"../index.C5fnWT1D.js";import{r as c,i as m,j as p,o as d,b as u,d as h,e as f,t as g}from"./vue.p_nG2h_3.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";const b={__name:"model",props:{path:String,scale:Number,positionY:{type:Number,default:0},rotation:{type:Boolean,default:!1}},setup(e){const f=e,g=c(null),x=c(null),b=new t,w=new n,v=new r;v.setDecoderPath("./scripts/libraries/draco/"),w.setDRACOLoader(v),w.load(f.path,(e=>{const t=e.scene;t.position.set(0,f.positionY,0),t.scale.set(f.scale,f.scale,f.scale),t.rotation.y=f.rotation?Math.PI/2:-Math.PI/2,b.add(t),function e(){requestAnimationFrame(e),t.rotation.y+=.0025,j.render(b,G)}()}));const y=new s(4210752),P=new i(4210752),_=new a(16777215,5);let j,G;return _.position.set(5,5,5),[y,P,_].forEach((e=>b.add(e))),m((()=>{const e=g.value,t=x.value;function s(){const e=t.clientWidth,s=t.clientHeight;j.setPixelRatio(window.devicePixelRatio),j.setSize(e,s),G.aspect=e/s,G.updateProjectionMatrix()}j=new o({canvas:e,alpha:!0}),j.setSize(t.clientWidth,t.clientHeight),G=new l(75,t.clientWidth/t.clientHeight,.1,1e3),G.position.z=5,s(),window.addEventListener("resize",s),p((()=>{window.removeEventListener("resize",s),j&&j.dispose(),b&&b.traverse((e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}))})),(e,t)=>(d(),u("div",{ref_key:"frameRef",ref:x,class:"flex justify-center w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-lg bg-zinc-800 bg-opacity-80 my-5",id:"frame"},[h("canvas",{ref_key:"canvasRef",ref:g,class:"w-[300px] sm:w-[400px] md:w-[500px] h-full",id:"model"},null,512)],512))}},w={class:"animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},v={__name:"fusion",setup:e=>(e,t)=>(d(),u("div",w,[t[0]||(t[0]=h("p",null," coming soon... ",-1)),f(b,{path:"./assets/models/m1_draco.glb",scale:1.75}),t[1]||(t[1]=h("p",{class:"mt-7"}," coming soon... ",-1)),f(b,{path:"./assets/models/m2_draco.glb",scale:24.55}),t[2]||(t[2]=h("p",{class:"mt-7"}," coming soon... ",-1)),f(b,{path:"./assets/models/m3_draco.glb",scale:.0175,positionY:-1.25,rotation:!0})]))},y={class:"w-full rounded-lg duration-500 bg-zinc-800 bg-opacity-80 group hover:bg-zinc-900 p-3 my-4"},P=["href"],_={class:"flex flex-col"},j={class:"font-light text-gray-400 text-sm"},G={class:"font-bold text-white text-xl mb-2"},S={class:"font-light text-gray-200 text-base"},O={__name:"card",props:{site:String,title:String,text:String,path:String},setup:e=>(t,s)=>(d(),u("div",y,[h("a",{href:e.path,target:"_blank",rel:"noreferrer"},[h("div",_,[h("h4",j,g(e.site),1),h("h3",G,g(e.title),1),h("p",S,g(e.text),1),s[0]||(s[0]=h("div",{class:"self-end font-light text-white text-sm"},[h("a",null,"READ MORE"),h("a",{class:"duration-500 ml-2 group-hover:ml-3"},">"),h("a",{class:"duration-500 opacity-0 group-hover:opacity-100"},">")],-1))])],8,P)]))},H={class:"animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},z={__name:"program",setup:e=>(e,t)=>(d(),u("div",H,[t[0]||(t[0]=h("p",null," 開発プロセスを効率化するためにGitHubを活用し、ソースコードの開発を行いました。 GitHubを使用することで、バージョン管理や問題追跡などが容易に行えます。 進行状況やコードの変更履歴を透明にし、より効果的な開発プロセスを実現しています。 ",-1)),f(O,{site:"GitHub",title:"OtaProject2024 / PyDoch",text:"GitHub is where OtaProject2024 builds software.",path:"https://github.com/OtaProject2024/PyDoch"}),t[1]||(t[1]=h("p",null," PyDochリポジトリは、ロボットを制御するためのPythonスクリプト群です。 PyYAMLを使用した柔軟な設定管理、RPi.GPIOによるRaspberry PiのGPIOピン制御、adafruit_bno055を活用したセンサーデータの取得、そしてPyGameによる音声制御を実現しています。 さらに、マルチスレッディングを駆使して、リアルタイムの応答性を損なわずに効率的な処理を可能にしている点が特徴です。 ",-1))]))},D={class:"animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},R={__name:"fishguide",setup:e=>(e,t)=>(d(),u("div",D,[t[0]||(t[0]=h("p",null," 釣りに興味があるけれど、どんな道具が必要なのか、服装はどうするのか、何から始めたらいいのか分からない方のためのガイドサイトです。 釣り初心者が安心して楽しめるよう、釣具や服装の選び方、基本的な釣りの手法を丁寧に紹介しています。 また、釣りには自然を守るためのルールや他の人への配慮が不可欠です。 初めての方でも安心して釣りに出かけられるよう、ルールやマナーについても分かりやすくまとめています。 自然と一体となる時間を楽しみながら、初めての釣りの一歩を踏み出してみましょう。 ",-1)),f(O,{site:"OtaProject2024 website",title:"Fishing Guide - How to starting fishing",text:"For all beginning fishermen.",path:"https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide#/"}),t[1]||(t[1]=h("p",{class:"mt-5"}," このサイトは、Vue.jsとTailwind CSSで構築され、シンプルかつ直感的なデザインを追求しました。 Vue.jsのスムーズな動作とTailwind CSSによる柔軟なデザインにより、見やすく使いやすいインターフェースを実現しています。 ",-1)),f(O,{site:"GitHub",title:"OtaProject2024 / FishingGuide",text:"GitHub is where OtaProject2024 builds software.",path:"https://github.com/OtaProject2024/FishingGuid"})]))},F={class:"animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},A={__name:"site",setup:e=>(e,t)=>(d(),u("div",F,[t[0]||(t[0]=h("p",null," このウェブサイトはシングルページアプリケーション(SPA)の形式で構築されており、プロジェクトメンバーが制作した3Dモデルが背景に配置されています。 Three.jsを活用してモデルの描画を行い、デザインにはTailwind CSS を用いて美しいスタイルを実現しています。 また、vue-gtagを使用することで、ユーザーのアクセス解析も可能です。 ",-1)),f(O,{site:"GitHub",title:"OtaProject2024 / ProjectPage",text:"GitHub is where OtaProject2024 builds software.",path:"https://github.com/OtaProject2024/ProjectPage"}),t[1]||(t[1]=h("p",null," SPAのメリットとして、最初の読み込み後はサーバーとの通信が非同期で行われるため、ページ全体を再読み込みすることなく動的なコンテンツの更新が可能です。 これにより、ページ遷移に伴う待ち時間が大幅に短縮され、ユーザーエクスペリエンスが向上します。 ",-1))]))},C={class:"animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12"},E=x({},[["render",function(e,t){return d(),u("div",C,t[0]||(t[0]=[h("p",null," coming soon... ",-1),h("video",{class:"w-full rounded-lg my-5",controls:"",src:"/2024/05/assets/videos/coming_soon.webm"},null,-1)]))}]]),M={class:"animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm"},k={class:"mt-32 flex flex-col items-center font-Default text-white"},I={class:"mt-10 mb-60 flex flex-col items-center w-3/4 md:w-2/5"},L={__name:"contents",setup:t=>(t,s)=>(d(),u("div",M,[h("div",k,[s[0]||(s[0]=h("div",{class:"animate-session-in"},[h("h1",{class:"font-bold text-center text-6xl md:text-7xl"},"Contents")],-1)),h("div",I,[f(e,{title:"3D model"}),f(v),f(e,{title:"source code"}),f(z),f(e,{title:"Fishing Guide"}),f(R),f(e,{title:"website"}),f(A),f(e,{title:"video"}),f(E)])])]))};export{L as default};
