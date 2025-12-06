export const siteConfig = {
  name: "EUNSEONG KIM",
  title: "AI Engineer",
  description: "Portfolio website of EUNSEONG KIM",
  accentColor: "#1d4ed8",
  social: {
    email: "model7589@gmail.com",
    instagram: "https://www.instagram/eunseong__kim",
    github: "https://github.com/esk-blue",
  },
  aboutMe:
    "저는 서울사이버대학교에서 인공지능을 전공하고 있으며, 회사에서 냉난방설비 유지보수 엔지니어로 근무하고 있습니다. 실제 산업 시스템의 운영과 문제 진단을 경험했으며, 인공지능 기술을 활용해 현장 문제 해결 능력을 극대화하고 실질적인 혁신을 이루는 것이 목표입니다 ",
  skills: ["Python", "AWS", "SQLD"],
  projects: [
    {
      name: "강화학습을 이용한 슈퍼마리오",
      description:
        "슈퍼 마리오 게임 환경을 MDP로 모델링하고, 보상 기반 학습을 통해 스테이지를 가장 효율적으로 완주하는 최적 정책(Optimal Policy)을 찾는 에이전트 개발",
     
      skills: ["Python", "Gym", "DQN"],
    },
    {
      name: "GPT기반의 자동 응답 카페 알바생",
      description:
        "GPT 모델을 활용하여 카페 환경에서 발생할 수 있는 고객 문의(메뉴 추천, 가격 문의, 위치 안내, 이벤트 문의 등)에 대해 정확하고 친절하게 자동 응답하는 시스템 구축.",
      
      skills: ["Python", "Open AI API", "Prompt Engineering"],
    },
    {
      name: "통신사 고객 이탈 예측 프로젝트",
      description:
        "통신 서비스 가입 고객의 이용 패턴, 청구 정보, 인구 통계학적 정보 등을 분석하여 특정 기간 내에 서비스를 해지할 가능성이 높은 고객을 예측",
     
      skills: ["ML Modeling", "Python", "Feature Engineering"],
    },
  ],
  experience: [
    {
      company: "Engineering Company",
      title: "Facility Engineer",
      dateRange: "6월 2018 - 현재",
      bullets: [
        "건축설비기사, 전기기사 등 다양한 자격증을 취득하여 공학적 지식 보유",
        "열역학, 냉동사이클, 배관시스템 흐름에 대한 설비작동 원리 이해",
        "전문 측정장비를 사용한 고장 진단, 설비 유지보수 등 문제 해결 능력 보유 ",
      ],
    },
  
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
