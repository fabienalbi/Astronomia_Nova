# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-17 19:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kepler_exoplanets', '0004_auto_20151215_1716'),
    ]

    operations = [
        migrations.AlterField(
            model_name='planet',
            name='inclination',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='planet',
            name='planet_radius',
            field=models.FloatField(default=2.5),
        ),
        migrations.AlterField(
            model_name='planet',
            name='semimajor_axis',
            field=models.FloatField(default=0.139),
        ),
        migrations.AlterField(
            model_name='planet',
            name='surface_temp',
            field=models.IntegerField(default=788),
        ),
        migrations.AlterField(
            model_name='star',
            name='stellar_mass',
            field=models.FloatField(default=0.94),
        ),
        migrations.AlterField(
            model_name='star',
            name='stellar_radius',
            field=models.FloatField(default=1.06),
        ),
        migrations.AlterField(
            model_name='star',
            name='stellar_temp',
            field=models.IntegerField(default=5535),
        ),
    ]
