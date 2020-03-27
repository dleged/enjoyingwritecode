import daruk from './daruk.init';

const port = process.env.PORT || 3000;

daruk.run(port, () => {
  daruk.logger.info(`服务已启动，访问 http://localhost:3000 查看效果`);
});

export default daruk;
