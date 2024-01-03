# Docker_part2

To List Image : docker images || docker images -a
To List Docker Container(Running): docker ps
To List Docker Container(Both Running and Stopped) : docker ps -a
To Create Image : docker build -t goal:latest .
To Create Docker Container : docker run -p 4000:80 -d --rm --name myGoal goal:latest
To Remote Image : docker rmi goal:latest(or Image Id)
To Remove Container: docker rm myGoal
To Stop Docker : docker stop myGoal
To Restart Docker : docker restart myGoal
To Remove all Images : docker image prune -a

Note:
-a: list all
-t: assign image name
--name: assign docker name
-d : detach mode (cmd will be available for usage where another terminal not needed to stop or get logs)
goal:latest = name:Tag
