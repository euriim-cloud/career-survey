function createSurveyForm() {
  // ==============================
  // 1. 기본 설정
  // ==============================
  const formTitle = '「AI 기반 실무형 직업상담사」 교육 만족도 조사';

  const formDescription =
    '안녕하십니까?\n\n' +
    '본 설문은 「AI 기반 실무형 직업상담사」 교육과정에 참여하신 여러분의 ' +
    '교육 만족도와 교육성과를 확인하고, 향후 구로여성인력개발센터의 ' +
    '취업지원 프로그램을 개선하기 위한 목적으로 실시합니다.\n\n' +
    '응답해 주신 내용은 프로그램 개선 및 성과 분석을 위한 자료로 활용됩니다. ' +
    '여러분의 솔직한 의견을 부탁드립니다.\n\n' +
    '※ 다음 문항에 대해 5점 척도로 응답해 주십시오.\n' +
    '① 전혀 그렇지 않다 ② 그렇지 않다 ③ 보통이다 ④ 그렇다 ⑤ 매우 그렇다';

  // ==============================
  // 2. Google Form 생성
  // ==============================
  const form = FormApp.create(formTitle);

  form.setDescription(formDescription);

  // 응답자 이메일 자동 수집 안 함
  form.setCollectEmail(false);

  // 1회 응답 제한은 해제
  form.setLimitOneResponsePerUser(false);

  // 진행률 표시
  form.setProgressBar(true);

  // ==============================
  // 3. 공통 척도
  // ==============================
  const scaleChoices = [
    '① 전혀 그렇지 않다',
    '② 그렇지 않다',
    '③ 보통이다',
    '④ 그렇다',
    '⑤ 매우 그렇다'
  ];

  // ==============================
  // 4. 카테고리별 문항 추가
  // ==============================

  // --------------------------------
  // Ⅰ. 교육내용 및 실무성
  // --------------------------------
  form.addSectionHeaderItem()
    .setTitle('Ⅰ. 교육내용 및 실무성');

  addMultipleChoice(
    form,
    '1. 교육내용은 직업상담사에게 필요한 실무역량을 중심으로 적절하게 구성되었다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '2. 이론과 실습의 구성이 적절했으며, 실제 직업상담 현장에서 활용할 수 있는 내용이 포함되어 있었다.',
    scaleChoices
  );

  // --------------------------------
  // Ⅱ. AI 활용 역량 향상
  // --------------------------------
  form.addSectionHeaderItem()
    .setTitle('Ⅱ. AI 활용 역량 향상');

  addMultipleChoice(
    form,
    '3. 교육을 통해 생성형 AI의 기본적인 활용 방법과 특징을 이해하게 되었다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '4. AI를 활용하여 취업정보 탐색, 취업서류 작성, 상담자료 작성 등 직업상담 업무를 수행할 수 있는 자신감이 향상되었다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '5. AI 활용 시 개인정보, 저작권, 정보의 정확성 등을 확인해야 한다는 점을 이해하게 되었다.',
    scaleChoices
  );

  // --------------------------------
  // Ⅲ. 직업상담사 직무역량 향상
  // --------------------------------
  form.addSectionHeaderItem()
    .setTitle('Ⅲ. 직업상담사 직무역량 향상');

  addMultipleChoice(
    form,
    '6. 교육을 통해 직업상담사의 역할과 실제 업무에 대한 이해가 높아졌다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '7. 구직자의 특성과 상황에 맞는 취업정보 제공 및 상담을 수행할 수 있는 자신감이 향상되었다.',
    scaleChoices
  );

  // --------------------------------
  // Ⅳ. 취업역량 및 취업 자신감
  // --------------------------------
  form.addSectionHeaderItem()
    .setTitle('Ⅳ. 취업역량 및 취업 자신감');

  addMultipleChoice(
    form,
    '8. 본 교육이 직업상담사로 취업하기 위한 준비에 실질적인 도움이 되었다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '9. 교육 참여 후 직업상담사 직무에 대한 관심과 취업 의지가 높아졌다.',
    scaleChoices
  );

  // --------------------------------
  // Ⅴ. 강사 및 교육 운영
  // --------------------------------
  form.addSectionHeaderItem()
    .setTitle('Ⅴ. 강사 및 교육 운영');

  addMultipleChoice(
    form,
    '10. 강사는 직업상담 및 AI 활용 분야에 대한 전문성을 갖추고 있었다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '11. 강사의 설명과 실습 진행은 이해하기 쉬웠으며, 질문이나 실습에 대한 피드백이 적절했다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '12. 교육 일정, 교육시간, 교육자료 및 실습환경 등 전반적인 운영이 적절했다.',
    scaleChoices
  );

  // --------------------------------
  // Ⅵ. 종합 만족도 및 향후 활용
  // --------------------------------
  form.addSectionHeaderItem()
    .setTitle('Ⅵ. 종합 만족도 및 향후 활용');

  addMultipleChoice(
    form,
    '13. 전반적으로 「AI 기반 실무형 직업상담사」 교육과정에 만족한다.',
    scaleChoices
  );

  addMultipleChoice(
    form,
    '14. 교육에서 배운 AI 활용 방법을 향후 직업상담 또는 취업활동에 실제로 활용할 의향이 있다.',
    scaleChoices
  );

  // --------------------------------
  // 15. 자유의견
  // --------------------------------
  form.addParagraphTextItem()
    .setTitle(
      '15. 본 교육에서 가장 도움이 되었던 점과 개선이 필요한 점, 향후 희망하는 교육이 있다면 자유롭게 작성해 주십시오.'
    )
    .setRequired(false);

  // ==============================
  // 5. 생성된 설문 URL 출력
  // ==============================
  Logger.log('========================================');
  Logger.log('Google Form 생성 완료');
  Logger.log('========================================');
  Logger.log('편집용 URL: ' + form.getEditUrl());
  Logger.log('응답용 URL: ' + form.getPublishedUrl());
  Logger.log('========================================');
}


/**
 * 5점 척도 객관식 문항을 추가하는 함수
 */
function addMultipleChoice(form, questionTitle, choices) {
  form.addMultipleChoiceItem()
    .setTitle(questionTitle)
    .setChoiceValues(choices)
    .setRequired(true);
}
