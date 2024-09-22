from django.contrib import admin
from django.utils.html import format_html
from .models import User, Channel, Notification
from django.contrib import admin
from .models import SiteConfiguration  # Adjust this import according to the actual location of your model

from django.contrib import admin
from django.utils.html import format_html
from .models import SiteConfiguration

@admin.register(SiteConfiguration)
class SiteConfigurationAdmin(admin.ModelAdmin):
    list_display = ['id','display_light_mode_svg', 'display_light_mode_img', 'display_dark_mode_svg', 'display_dark_mode_img']

    def display_light_mode_svg(self, obj):
        if obj.light_mode_svg:
            return format_html('<a href="{}" target="_blank">View SVG</a>', obj.light_mode_svg.url)
        return '-'

    def display_light_mode_img(self, obj):
        if obj.light_mode_img:
            return format_html('<img src="{}" style="max-height: 50px;" />', obj.light_mode_img.url)
        return '-'

    def display_dark_mode_svg(self, obj):
        if obj.dark_mode_svg:
            return format_html('<a href="{}" target="_blank">View SVG</a>', obj.dark_mode_svg.url)
        return '-'

    def display_dark_mode_img(self, obj):
        if obj.dark_mode_img:
            return format_html('<img src="{}" style="max-height: 50px;" />', obj.dark_mode_img.url)
        return '-'

    display_light_mode_svg.short_description = 'Light Mode SVG'
    display_light_mode_img.short_description = 'Light Mode Image'
    display_dark_mode_svg.short_description = 'Dark Mode SVG'
    display_dark_mode_img.short_description = 'Dark Mode Image'


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'username', 'name', 'email', 'date_added', 'is_active'
    )
    search_fields = ('username', 'email', 'name')
    list_filter = ('is_active',)  # Tuple with a comma
    readonly_fields = ('date_added', 'media_count')
    filter_horizontal = ('groups', 'user_permissions')  # Many-to-many relationships

    fieldsets = (
        (None, {
            'fields': ('username', 'password')
        }),
        ('Personal info', {
            'fields': ('name', 'email', 'logo', 'description', 'title', 'location')
        }),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')
        }),
        ('Important dates', {
            'fields': ('last_login', 'date_joined')
        }),
        ('Additional Info', {
            'fields': ('is_featured', 'advancedUser', 'media_count', 'notification_on_comments', 'allow_contact', 'is_editor', 'is_manager')
        }),
    )

    def logo_thumbnail(self, obj):
        if obj.logo:
            return format_html('<img src="{}" width="50" height="50" />', obj.logo.url)
        return None
    logo_thumbnail.short_description = 'Logo'
