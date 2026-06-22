import { cases, modules } from './data.js';

export const state = {
  route: 'dashboard',
  decomposedScreens: [],
  templates: [...modules],
  cases: [...cases],
  builderScreens: [modules[0], modules[1]],
  globalCopy: {
    brand: '示例品牌',
    product: '明星产品',
    sellingPoint: '高效、安心、可持续复购',
  },
};

export function setRoute(route) {
  state.route = route;
}

export function addDecomposedScreens(fileName) {
  const baseName = fileName || '详情页长图';
  state.decomposedScreens = Array.from({ length: 5 }, (_, index) => ({
    id: `screen-${Date.now()}-${index}`,
    title: `${baseName} · 第 ${index + 1} 屏`,
    note: ['首屏吸引', '痛点引入', '卖点说明', '信任背书', '转化收口'][index],
  }));
}

export function saveScreenAsTemplate(screen) {
  state.templates.push({
    id: `template-${Date.now()}`,
    title: screen.title,
    tag: screen.note,
    copy: '由拆解工具保存的单屏模板，可在搭建器中复用。',
    accent: '#8b5cf6',
  });
}

export function addTemplateToBuilder(template) {
  state.builderScreens.push(template);
}

export function updateCopy(key, value) {
  state.globalCopy[key] = value;
}
