// Сообщение "Меню премиум подписки"
export function subscribeMessage() {
	return (`🌟 <b>Почему вам нужна премиум подписка на наш канал?</b>\n\nВы уже знакомы с нашим каналом, где мы публикуем интересные Раздачи. Давайте рассмотрим, как премиум подписка может сделать ваше участие более гибким! 🏆\n\n✨ <b>Без премиум подписки:</b>\n\nВы можете участвовать только в 2 раздачах без пометки ⭐️.\nВы не можете участвовать в Раздача для Премиум-пользователей!\n\n✨ <b>С премиум подпиской:</b>\n\nУберите все ограничения! Вы можете участвовать в бесконечном количестве раздач.\nПолучите доступ к эксклюзивным премиум раздачам! 🎁 \n\nБудьте первыми! Премиум подписчики получают информацию о новых раздачах раньше остальных, что позволяет не упустить уникальные предложения.`);
}

// Сообщение "Меню оплаты выбранной подписки"
export function subscribeShowMessage() {
	return (`Пожалуйста, выберите удобный метод оплаты:\n\n⚠️ Переходя на окно оплаты вы подтверждаете ознакомление и согласие с регламентом действия рекуррентных платежей.`);
}

// Сообщение "Успешная оплата подписки"
export function subscribePaymentMessage(date) {
	return (`🎉 <b>Транзакция прошла успешно!</b>\n\nТеперь вам доступны все функции нашего бота, ваша премиум-подписка активирована до: ${date}`);
}