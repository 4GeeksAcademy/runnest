"""empty message

Revision ID: f3d80780254e
Revises: 
Create Date: 2024-02-03 06:36:33.269025

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f3d80780254e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('organizador',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hashed_password', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('salt', sa.String(length=250), nullable=False),
    sa.Column('nombre', sa.String(length=200), nullable=False),
    sa.Column('telefono', sa.BigInteger(), nullable=True),
    sa.Column('organizacion', sa.String(length=200), nullable=False),
    sa.Column('pagina_web', sa.String(length=500), nullable=False),
    sa.Column('terminos', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('hashed_password', sa.String(length=80), nullable=False),
    sa.Column('salt', sa.String(length=250), nullable=False),
    sa.Column('nombre', sa.String(length=200), nullable=False),
    sa.Column('apellido', sa.String(length=200), nullable=False),
    sa.Column('direccion', sa.String(length=500), nullable=True),
    sa.Column('telefono', sa.BigInteger(), nullable=True),
    sa.Column('terminos', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('carrera',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=250), nullable=False),
    sa.Column('distancia', sa.String(length=200), nullable=False),
    sa.Column('ciudad', sa.String(length=100), nullable=False),
    sa.Column('pais', sa.String(length=100), nullable=False),
    sa.Column('dia', sa.Integer(), nullable=True),
    sa.Column('mes', sa.Integer(), nullable=True),
    sa.Column('year', sa.Integer(), nullable=True),
    sa.Column('costo', sa.Integer(), nullable=True),
    sa.Column('dificultad', sa.String(length=200), nullable=False),
    sa.Column('capacidad', sa.Integer(), nullable=True),
    sa.Column('terminos', sa.Boolean(), nullable=False),
    sa.Column('organizador_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['organizador_id'], ['organizador.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('carrera_usuario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('carrera_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['carrera_id'], ['carrera.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favoritos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('carrera_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['carrera_id'], ['carrera.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('puntuacion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('puntuacion', sa.Integer(), nullable=False),
    sa.Column('carrera_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['carrera_id'], ['carrera.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('puntuacion')
    op.drop_table('favoritos')
    op.drop_table('carrera_usuario')
    op.drop_table('carrera')
    op.drop_table('user')
    op.drop_table('organizador')
    # ### end Alembic commands ###