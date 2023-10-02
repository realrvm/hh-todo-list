# Todo List / Список дел

[![todo list ci/cd](https://github.com/realrvm/hh-todo-list/actions/workflows/main.yml/badge.svg)](https://github.com/realrvm/hh-todo-list/actions/workflows/main.yml)
![nodejs](https://img.shields.io/badge/Node%20js-v20.8.0-blue)
![react](https://img.shields.io/badge/React-v18.2.0-rebeccapurple)
![nodejs](https://img.shields.io/badge/typescript-v5.2.2-lightgray)

![react](https://img.shields.io/badge/Разработано-в%20свободное%20время-yellow)
![react](https://img.shields.io/badge/Цель%20приложения-показ%20навыков-tomato)

[Список дел](https://chimerical-blancmange-0f9f1e.netlify.app/) - приложение создано для демонстрации текущих навыков. Приложение делается в свободное время, поэтому выбран `todo list`, чтобы не слишком заботиться о дизайне (хотя я старался).

## Установка

```bash
git clone git@github.com:realrvm/hh-todo-list.git
cd hh-todo-list
npm ci
```

## Запуск

```bash
npm run dev
```
## Использованы

- общее
  - `feature-sliced design` - методология для фронтенд проектов
  - `dark` && `light` темы
  - `localStorage` - настройки сохраняются в браузере
  - `admin` && `admin` - можно залогиниться, но эта возможность создана только для демонстрации работы с `asyncThunk` в `redux`. Она ни на что не влияет.
  - `ci/cd` - использован `GitHub Actions`
- backend
  - `json-server` - простой сервер
- фронт
  - `vite` - инструмент для настройки сред разработки
  - `react` - библиотека для разработки интерфейсов
  - `typescript` - надстройка над `javascript` для его типизации
  - `redux-toolkit` - менеджер состояния данных
  - `react-router-dom` - для маршрутизации
  - `scss` - препроцессор для стилизации
  - `i18n` - интернационализация приложения
  - `jest` && `react testing library` - для тестирования
  - `eslint` - для анализа кода
  - `storybook` - для показа элементов интерфейса
  - и ещё многое, не такое принципиальное.

## Roadmap

Возможно.
