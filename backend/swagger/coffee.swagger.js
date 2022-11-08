/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 스타벅스 커피 목록 조회
 *     tags: [coffee-controller]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          _id:
 *                              type: string
 *                              example: 61e55a545641e34600254a85
 *                          name:
 *                              type: string
 *                              example: 나이트로 바닐라 크림
 *                          img:
 *                              type: string
 *                              example: https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg
 */