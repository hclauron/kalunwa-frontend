# Generated by Django 4.0.3 on 2022-04-11 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0006_contributor_event_contributor_project_contributor'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='contributor',
            new_name='contributors',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='contributor',
            new_name='contributors',
        ),
    ]