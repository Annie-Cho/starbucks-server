/**
 * @swagger
 * /tokens/request-token:
 *   post:
 *     summary: 토큰 인증 요청
 *     tags: [token-controller]
 *     requestBody:
 *       required: true
 *       description: 입력된 핸드폰 번호로 인증번호를 전송합니다.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                  type: string
 *                  example: '01037893571'
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: string
 *                  example: 핸드폰으로 인증 문자가 전송되었습니다!
 * /tokens/validate-token:
 *   patch:
 *     summary: 인증 완료
 *     tags: [token-controller]
 *     requestBody:
 *       required: true
 *       description: 입력된 핸드폰 번호를 통해 입력받은 인증번호의 일치 여부를 확인합니다.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                  type: string
 *                  example: '01037893571'
 *               token:
 *                  type: string
 *                  example: '123456'
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                type: boolean
 *                example: true
 */
