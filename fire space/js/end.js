game.newLoopFromClassObject('load', new Loading());
game.newLoopFromClassObject('lvl1', new lvl1());
game.newLoopFromClassObject('logo', new Logo(0.2, 1, 'lvl1', '#1f0836', '#FFFFFF', ['Дмитрий Вансович', 'При поддержке vk.com', 'Представляет', 'Fire Space']));

game.startLoop('logo');