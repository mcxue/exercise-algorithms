// 如何用栈实现队列

/**
 * 实现思路：使用两个栈 A、B 可以实现队列
 * 入队时，将数据押入栈 A 中
 * 出队时，将栈 A 数据逐个弹出并将其押入栈 B 中，此时栈 B 弹出一个数据即为出队
 * 最后还需要将栈 B 剩余数据逐个弹出并押入栈 A
 */
