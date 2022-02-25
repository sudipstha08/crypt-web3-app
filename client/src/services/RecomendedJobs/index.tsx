const JobsList = [
  {
    imgSrc: '/assets/recomendedJobs/job-image1.jpg',
    title: [
      <span key={1} className="pink">
        未経験歓迎！
      </span>,
      '人気の商社で働こう！事務系総合職・秘書／職完全週休2日制／ボーナス年2回／志望動機は不要／面接1回！',
    ],
    location: '東京都 渋谷区',
    time: '10:00~19:00',
    salary: '月額25~30万円',
  },
  {
    imgSrc: '/assets/recomendedJobs/job-image2.jpg',
    title: [
      '保険会社のお問い合わせ対応や事務対応がメインのコールセンターのお仕事',
      <span key={1} className="pink">
        ◎未経験歓迎
      </span>,
      ' ◎土日祝休み ◎転勤なし',
    ],
    location: '東京都 新宿区',
    time: '9:30~18:30',
    salary: '月額24~35万円',
  },
  {
    imgSrc: '/assets/recomendedJobs/job-image3.jpg',
    title: [
      '事務スタッフ ',
      <span key={1} className="pink">
        ◎未経験OK！
      </span>,
      '人物重視の採用｜定時帰り、土日祝休み、最大9連休、賞与など魅力多数！',
    ],
    location: '東京都 港区',
    time: '10:00~19:30',
    salary: '月額27万円',
  },
  {
    imgSrc: '/assets/recomendedJobs/job-image4.jpg',
    title: [
      'ITサポート事務 ☆東京都＆上場企業の出資で生まれた安定企業／年間休日は多めの129日／',
      <span key={1} className="pink">
        未経験歓迎！
      </span>,
    ],
    location: '東京都 渋谷区',
    time: '10:00~19:00',
    salary: '月額27~35万円',
  },
  {
    imgSrc: '/assets/recomendedJobs/job-image5.jpg',
    title: [
      'コミュニケーションセールス（業界No.1の商品をPR）◎早期昇格、平均月収40万円！',
      <span key={1} className="pink">
        未経験歓迎！
      </span>,
    ],
    location: '東京都 新宿区',
    time: '10:00~19:30',
    salary: '月額35〜40万円',
  },
  {
    imgSrc: '/assets/recomendedJobs/job-image6.jpg',
    title: [
      '【積極採用中】ショールームで働くコーディネーター★年間休日125日！★',
      <span key={1} className="pink">
        未経験からスキルを取得できる充実の研修あり。
      </span>,
    ],
    location: '東京都 千代田区',
    time: '10:00~19:00',
    salary: '月額25~35万円',
  },
]
const RecomendedJobsService = () => {
  return JobsList
}

export { RecomendedJobsService }
