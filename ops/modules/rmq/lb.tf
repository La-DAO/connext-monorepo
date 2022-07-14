resource "aws_alb" "lb" {
  security_groups            = var.service_security_groups
  subnets                    = var.lb_subnets
  enable_deletion_protection = false
  idle_timeout               = var.timeout
  tags = {
    Family = "${var.environment}-${var.stage}-${var.container_family}"
    Domain = var.domain
  }
}



resource "aws_lb" "network" {
  name               = "${var.environment}-${var.stage}-network-lb"
  internal           = true
  load_balancer_type = "network"
  subnets            = var.private_subnets

  enable_deletion_protection = false

  tags = {
    Family = "${var.environment}-${var.stage}-${var.container_family}"
    Domain = var.domain
  }
}

resource "aws_lb_target_group" "rabbit" {
  name        = "${var.environment}-${var.stage}-rmq-lb-tg"
  port        = 5672
  protocol    = "TCP"
  vpc_id      = var.vpc_id
  target_type = "ip"

  lifecycle {
    create_before_destroy = true
  }

  stickiness {
    enabled = false
    type    = "lb_cookie"
  }

  depends_on = [aws_lb.network]
}

resource "aws_lb_listener" "rabbit" {
  load_balancer_arn = aws_lb.network.arn
  port              = 5672
  protocol          = "TCP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.rabbit.arn
  }
}
