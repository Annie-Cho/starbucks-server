/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원 목록 조회
 *     tags: [user-controller]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          id:
 *                              type: string
 *                              example: 62d21ff074642bf615303a50
 *                          name:
 *                              type: string
 *                              example: 아라111
 *                          email:
 *                              type: string
 *                              example: ala@gmail.com
 *                          personal:
 *                              type: string
 *                              example: 220101-*******
 *                          prefer:
 *                              type: string
 *                              example: https://naver.com
 *                          phone:
 *                              type: string
 *                              example: 01012345678
 *                          og:
 *                              type: object
 *                              properties:
 *                                  title:
 *                                      type: string
 *                                      example: 네이버
 *                                  description:
 *                                      type: string
 *                                      example: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"
 *                                  image:
 *                                      type: string
 *                                      example: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
 * /user:
 *   post:
 *     summary: 회원 가입
 *     tags: [user-controller]
 *     requestBody:
 *       required: true
 *       description: 입력된 회원 정보를 취합하여 데이터베이스에 저장합니다.(단, 인증완료된 회원만 저장 가능)
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *                  example: '조혜인'
 *               email:
 *                  type: string
 *                  example: 'ani100482@gmail.com'
 *               personal:
 *                  type: string
 *                  example: '220717-2222222'
 *               prefer:
 *                  type: string
 *                  example: 'https://www.naver.com'
 *               pwd:
 *                  type: string
 *                  example: '1234'
 *               phone:
 *                  type: string
 *                  example: '01037893571'
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                type: string
 *                example: 61e62e84bf8893ecb66f35f9
 */