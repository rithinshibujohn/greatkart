# Generated by Django 5.0.6 on 2024-08-22 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0002_rename_quantity_cartitem_quantity'),
        ('store', '0002_variation'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartitem',
            name='variations',
            field=models.ManyToManyField(blank=True, to='store.variation'),
        ),
    ]
