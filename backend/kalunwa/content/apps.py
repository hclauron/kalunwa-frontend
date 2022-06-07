from django.apps import AppConfig


class ContentConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'kalunwa.content'

    def ready(self) -> None:
        import kalunwa.content.signals
        return super().ready()
