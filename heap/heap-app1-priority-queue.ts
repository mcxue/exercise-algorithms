// 堆的应用1：优先级队列

/**
 * 队列的特点是先进先出，在优先级队列中，出队的顺序根据优先级，优先级最高的先出队
 * 使用堆来实现优先级队列是最直接、最高效的
 * 下面是优先级队列的应用
 */

/**
 * 1. 合并多个有序文件
 * 有 100 个有序文件，其中每个文件有序存储着有序字符串，希望把这 100 个有序文件组合成一个大的有序文件
 * 从 100 个有序文件中分别取出最小字符串，放入小顶堆中
 * 将堆顶字符串写入到大文件中，然后删除堆顶字符串，并在该字符串来源的文件再取最小字符串，放入小顶堆中
 * 重复上述步骤，直到所有小文件中的数据都放入到大文件中位置
 */

/**
 * 2. 高性能定时器
 * 定时器中维护了许多定时任务
 * 这里维护一个小顶堆，堆顶任务是最先要执行的
 * 将当前时间减去堆顶任务的时间得到间隔时间 T，定时器在 T 后执行该任务并删除该堆顶任务
 * 以此类推，新的堆顶任务出现后，重复上述操作
 */
