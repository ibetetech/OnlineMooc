# Generated by Django 3.0 on 2020-08-22 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banner',
            name='image',
            field=models.ImageField(help_text='$显示图片$', upload_to='banner/%Y/%m', verbose_name='轮播图'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='image',
            field=models.ImageField(default='image/default.png', help_text='$显示头像$', upload_to='image/%Y/%m', verbose_name='头像'),
        ),
    ]
