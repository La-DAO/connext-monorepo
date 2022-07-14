output "dns_name" {
  value = aws_alb.lb.dns_name
}

output "rmq_managemenr_endpoint" {
  value = aws_route53_record.management.name
}

output "amqp_endpoint" {
  value = aws_route53_record.amqp.name
}

output "log_group_name" {
  value = aws_cloudwatch_log_group.container.name
}

output "log_group_arn" {
  value = aws_cloudwatch_log_group.container.arn
}
