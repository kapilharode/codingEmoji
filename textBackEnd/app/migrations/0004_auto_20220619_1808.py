# Generated by Django 3.2.8 on 2022-06-20 06:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_textinformation_input_text'),
    ]

    operations = [
        migrations.RenameField(
            model_name='textinformation',
            old_name='input_text',
            new_name='inputText',
        ),
        migrations.RenameField(
            model_name='textinformation',
            old_name='is_state',
            new_name='state',
        ),
    ]
